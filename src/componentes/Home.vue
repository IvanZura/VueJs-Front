<template lang="pug">
    div
        v-content
            v-container(fluid, fill-height)
                v-layout(justify-center, align-center)
                    v-flex(shrink)           
                        h2 Home
                        router-link(to='/login') Login
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'app',
    data(){
        return {

        }
    },
    methods: {
        ... mapMutations(['activado','desativado'])
    },
    created() {
        this.$store.commit('activado')
    }
}
</script>
