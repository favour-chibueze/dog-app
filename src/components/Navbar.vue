<template>
    <div>
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