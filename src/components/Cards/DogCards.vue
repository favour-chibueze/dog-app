<template>
    <div class="card-container">
        <b-row class="mt-4 card-container__row" cols="1" cols-sm="1" cols-md="2" cols-lg="3" >
            <div class="card mt-4" v-for="(dog, index) in dogs" :key="index">
                <b-col>
                    <router-link class="text-dark text-decoration-none" :to="{ name: 'dogDetails', params: {name: dog.name, url: dog.imgUrl}}">  
                        <b-img-lazy
                                :src="dog.imgUrl" 
                                v-bind="mainProps" 
                                class="card-img-top"
                                width="200" 
                                height="250"
                                :per-page="perPage"
                                :current-page="currentPage"
                            >
                            </b-img-lazy>
                            <div class="card-body">
                                <h5 class="card-title text-capitalize text-center">{{dog.name}}</h5>
                            </div>
                    </router-link>
                       
                </b-col>
             </div>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'DogCards',
    Title: 'Cards',
    props: {
        dogs: []
    },
    data(){
        return {
            data: {},
            perPage: 3,
            currentPage: 1,
            // images: [],
            mainProps: {
            center: true,
            blank: true,
            blankColor: '#bbb',
            }
        }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
    }
}
</script>