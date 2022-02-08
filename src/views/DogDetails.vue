<template>
    <div>
        <b-container class="mt-4">
            <div class="card mt-4">
                    <b-img-lazy
                        :src="this.$route.params.url"  
                        width="200" 
                        height="250"
                        >
                    </b-img-lazy>
                    <div class="card-body">
                        <h5 class="card-title text-capitalize text-center">{{this.$route.params.name}}</h5>
                    </div>
             </div>
        </b-container>
    </div>
</template>

<script>
export default {
    title: 'Dog App',
    name: 'home',
    components: {
    },
    props: {
        dogs: []
    },
    data(){
        return {
            dog: '',
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
            console.log(response);
        })
        .catch(() => {
            console.log('Unable to load dogs');
        });
        }
        
    }
}
</script>
