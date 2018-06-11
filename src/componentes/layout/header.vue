<template lang="pug">
    div
        v-navigation-drawer(clipped, fixed, v-model="drawer", app)
            v-list(dense)
                v-list-tile(@click="")
                    v-list-tile-action
                        v-icon dashboard
                    v-list-tile-content
                        v-list-tile-title Dashboard
                v-list-tile(@click="")
                    v-list-tile-action
                        v-icon settings
                    v-list-tile-content
                        v-list-tile-title Settings
        v-toolbar(app, fixed, clipped-left, dark, :color='this.$store.state.color')
            v-toolbar-side-icon(@click.stop="drawer = !drawer")
            v-toolbar-title Application
                
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'app',
    data() {
        return {
            drawer: true
        }
    },
    computed: {
        ... mapState(['mostrarMain','color'])
    },
    props: {
        source: String
    }
}
</script>

