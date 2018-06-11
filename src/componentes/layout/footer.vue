<template lang="pug">
    div
            v-footer(dark, app, :color='this.$store.state.color', fixed)
                span &copy; 2017
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'app',
    computed: {
        ... mapState(['mostrarMain','color'])
    }
}
</script>
