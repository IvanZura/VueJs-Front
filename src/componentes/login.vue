<template lang="pug">
    div
        v-content
            v-container(fluid, fill-height)
                v-layout(align-center, justify-center)
                    v-flex(xs12, sm8, md4)
                        v-card.elevation-12
                            
                            v-toolbar(dark, :color="this.$store.state.color")
                                v-toolbar-title Ingreso
                                v-spacer
                                    router-link(to='/') Home
                            v-card-text
                                v-form
                                    v-text-field(prepend-icon="person", name="login", label="Login", type="text", :color='this.$store.state.color')
                                    v-text-field(prepend-icon="lock", name="password", label="Password", id="password", type="password", :color='this.$store.state.color')
                            v-card-actions
                                v-spacer
                                v-btn(dark, :color="this.$store.state.color") Login
                  

        
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'app',
    data(){
        return {
            drawer: null
        }
    },
    computed: {
        ... mapState(['mostrarMain','color'])
    },
    methods: {
        ... mapMutations(['activado','desativado'])
    },
    created() {
        this.$store.commit('desactivado')
    }
}
</script>

