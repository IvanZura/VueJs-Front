<template lang="pug">
  #app
    v-app#inspire
      div(v-if='this.$store.state.mostrarMain')
        in-header
      router-view
      div(v-if='this.$store.state.mostrarMain')
        in-footer
</template>

<script>
import 'vuetify/dist/vuetify.min.css';
import { mapState } from 'vuex'
import InHeader from './componentes/layout/header'
import InFooter from './componentes/layout/footer'

export default {
  name: 'app',
  components: {
    InHeader, InFooter
  },
  computed: {
    ... mapState(['mostrarMain'])
  },
  data () {
    return {

    }
  },
  created() {
    
  }
}
</script>

<style lang="scss">
</style>
