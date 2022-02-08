<template>
    <div>
        <!-- <input size="sm"  v-model="search" type="text" class="mr-sm-2" placeholder="Search" /> -->
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">My Dog App</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm"  v-model="search" type="text" class="mr-sm-2" placeholder="Search"></b-form-input>
                    </b-nav-form>
                </b-navbar-nav> 
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
    watch: {
        search() {
            this.$eventHub.$emit("_search", this.search)
        }
    },
    computed: {
        ...mapGetters({
                dogList: 'getDogList'
            }),
    },
    methods: {

    }
}
</script>