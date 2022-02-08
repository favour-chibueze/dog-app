<template>
    <div>
        <b-container class="mt-4">
            <MasterLayout/>
             <div class="mt-3">
                 <router-link class="text-decoration-none" to="/"><b-icon class="icon" variant="" icon="chevron-left" scale="1"></b-icon>Back </router-link>
             </div>
            <div class="text-center mt-4">
                    <b-img-lazy
                        :src="this.$route.params.url"
                        alt="dog"  
                        width="500"
                        class="details-img"
                        >
                    </b-img-lazy>
                    <div class="details-container_body">
                        <h5 class="card-title text-capitalize mt-3 text-center">Breed: {{this.$route.params.name}}</h5>
                        <div v-if="dogDetails == '' ">
                            <p>This dog has no sub-breed</p>
                        </div>
                        <p v-for="(details, index) in dogDetails" :key="index" v-else>{{details}}</p>
                    </div>
             </div>
        </b-container>
    </div>
</template>

<script>
import MasterLayout from '../components/Navbar.vue'
export default {
    title: 'Dog App',
    name: 'home',
    components: {
        MasterLayout
    },
    props: {
        dogs: []
    },
    data(){
        return {
            dogDetails: [],
        }
    },
    computed: {
     
    },
    mounted () {
        this.getDogDetails()
    },
     methods: {
        getDogDetails() {
            this.axios
        .get(`https://dog.ceo/api/breed/${this.$route.params.name}/list`)
        .then(response => {
            this.dogDetails = response.data.message
        })
        .catch(() => {
            console.log('Unable to load dogs');
        });
        }
        
    }
}
</script>
