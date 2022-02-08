<template>
    <div>
         <router-link :to="{ name: 'cardDetails', query: {cardId: data.id}}">
             
         </router-link>
    </div>
</template>

<script>
export default {
    name: 'MasterLayout',
    Title: 'MasterLayout',
    data: function() {
        return {
            search: ''
        };
    },
    created() {
        
    },
    methods: {
    }
}
</script>