<template>
    <div>
        <b-container class="mt-4">
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">My Dog App</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input size="sm"  v-model="search" type="text" class="mr-sm-2" placeholder="Search"></b-form-input>
                            <b-button size="sm" class="my-2 my-sm-0" type="submit" @click.prevent="search">Search</b-button>
                        </b-nav-form>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
            <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="4" >
                 <p v-if="loading">
                    Loading...
                </p>
                <b-col v-else v-for="dog in dogs" :key="dog">
                    <!-- {{dogs}} -->
                    <b-img-lazy
                     :src="dog" 
                     v-bind="mainProps" 
                     class="mx-auto d-flex" 
                     width="200" 
                     height="230"
                     :per-page="perPage"
                     :current-page="currentPage"
                     >
                     </b-img-lazy>
                </b-col>
            </b-row>
{{ currentPage }}
            <!-- <b-img-lazy v-bind="mainProps" :src="getImageUrl(80)" alt="Image 1"></b-img-lazy>
            <b-img-lazy v-bind="mainProps" :src="getImageUrl(82)" alt="Image 2"></b-img-lazy>
            <b-img-lazy v-bind="mainProps" :src="getImageUrl(84)" alt="Image 3"></b-img-lazy>
            <b-img-lazy v-bind="mainProps" :src="getImageUrl(85)" alt="Image 4"></b-img-lazy>
            <b-img-lazy v-bind="mainProps" :src="getImageUrl(88)" alt="Image 5"></b-img-lazy>
            <b-img-lazy v-bind="mainProps" :src="getImageUrl(90)" alt="Image 6"></b-img-lazy>
            <b-img-lazy v-bind="mainProps" :src="getImageUrl(92)" alt="Image 7"></b-img-lazy>
            <b-img-lazy v-bind="mainProps" :src="getImageUrl(94)" alt="Image 8"></b-img-lazy> -->
            <div class="mt-2">Value: {{ search }}</div>
            <b-pagination v-model="currentPage" @change="onPageChanged" :total-rows="rows"
      :per-page="perPage" align="center"></b-pagination>
        </b-container>
    </div>
</template>

<script>
export default {
    title: 'Dog App',
    name: 'home',
    components: {
      
    },
    data(){
        return {
            search: '',
             loading: false,
            // rows: 100,
            perPage: 3,
            currentPage: 1,
            dogs: [],
            images: [],
            mainProps: {
            center: true,
            blank: true,
            blankColor: '#bbb',
            class: 'my-5'
            }
        }
    },
    computed: {
      rows() {
        return this.dogs.length
      }
    },
    mounted () {
        this.getImageUrl()
    },
    methods: {
        searchDogs() {
            this.loading = true;
            this.getImageUrl()
                .then((response) => {
                this.images = response.data.message;
                this.loading = false;
                })
            console.log("Searching for: ", this.images)
        },
        onPageChanged(page) {
            this.getImageUrl(this.perPage, page - 1);
        },
        getImageUrl() {
        this.loading = true;
        this.axios
        .get(`https://dog.ceo/api/breeds/image/random/50`)
        .then(response => {
            console.log(response);
            this.dogs = response.data.message
            this.loading = false;
            console.log(this.dogs);
            return this.dogs.slice(
                (this.currentPage + 1) * this.perPage,
                this.currentPage * this.perPage,
                console.log(this.perPage)
            );
        })
        .catch(() => {
            console.log('Unable to load dogs');
        });
      }
    }
}
</script>
