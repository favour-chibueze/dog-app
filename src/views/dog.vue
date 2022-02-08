<template>
    <div>
        <b-container class="mt-4">
            <MasterLayout/>
            <div class="spinner-container mt-4 d-flex justify-content-center" v-if="loading">
                <b-spinner label="Loading..."></b-spinner>
            </div>
            
            <DogCards 
                :dogs="filteredDogs" 
                v-else
            />
            <div class="mt-2 text-center" v-if="!filteredDogs.length">
                No record found
            </div>
            <div class="mt-3" v-if="loading ===  false">
                <b-pagination
                    v-model="currentPage" 
                    @change="onPageChanged" 
                    :total-rows="rows"
                    :per-page="perPage" 
                    align="center">
                </b-pagination>
            </div>
        </b-container>
    </div>
</template>

<script>
import MasterLayout from '../components/Navbar.vue'
import DogCards from '../components/Cards/DogCards.vue'
export default {
    title: 'Dog App',
    name: 'home',
    components: {
      MasterLayout,
      DogCards
    },
    data(){
        return {
            search: '',
            perPage: 3,
            currentPage: 1,
            loading: true,
            dogs: [],
            dogsList: [],
            images: [],
            searchStr: ""
        }
    },
    created() {
        this.$eventHub.$on("_search" , (search) => {
            console.log(search);
           this.searchStr = search
        })
    },
    computed: {
      rows() {
        return this.dogs.length
      },
      filteredDogs() {
        return this.dogsList.filter(dog =>dog.name.toLowerCase().includes(this.searchStr.toLowerCase()))
        }
    },
    mounted () {
        this.getDogBreeds()
        this.getBreedsImages()
    },
     methods: {
        onPageChanged(page) {
            this.getDogBreeds(this.perPage, page - 1);
        },
        getDogBreeds() {
        this.loading = true;
        this.axios
        .get(`https://dog.ceo/api/breeds/list/all`)
        .then(response => {
            var responseData = response.data.message
            this.dogs = Object.keys(response.data.message)
            this.dogBreed = this.dogs.slice(0, 10);
            this.dogBreed.forEach(async (dogBreed) =>  {
                if(dogBreed !== undefined){
                    const result = await this.getBreedsImages(dogBreed)
                    this.loading = false
                    this.dogsList.push(...result.data.message.map(dog => {
                        if(dog.length) {
                            return {
                                name: dogBreed,
                                imgUrl: dog
                            }
                        }
                    }))
                     this.$store.commit('setDogList', responseData);
                }
            });
            return this.dogsList.slice(
                (this.currentPage + 1) * this.perPage,
                this.currentPage * this.perPage,
                console.log(this.perPage)
            );
           
              
        })
        .catch(() => {
            console.log('Unable to load dogs');
        });
      },
      getBreedsImages(dogBreed) {
        try {
            if(dogBreed) {
                return this.axios.get(`https://dog.ceo/api/breed/${dogBreed}/images/random/10`)
            }
        }catch {
            return []
        }
      }
    }
}
</script>
