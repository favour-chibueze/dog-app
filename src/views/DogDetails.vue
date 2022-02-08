<template>
    <div>
        <b-container class="mt-4">
            <b-img-lazy
                :src="this.$route.params.url" 
                blank-src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif"
                class="card-img-top"
                width="200" 
            >
            </b-img-lazy>
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
