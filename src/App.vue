<template>
  <div id="app">
    <base-spinner/>
    <layout-notification/>

    <layout-navigation v-if="showNavBar"/>
    
    <router-view/>
  </div>
</template>

<script>
import BaseSpinner from './components/global/BaseSpinner'
import LayoutNotification from './components/global/LayoutNotification'
import LayoutNavigation from './components/layout/LayoutNavigation'
import { setTimeout } from 'timers';

export default {
  name: 'App',
  components: {
    BaseSpinner,
    LayoutNotification,
    LayoutNavigation
  },
  computed: {
    showNavBar(){
      if(this.$route.name !== 'login' && this.$route.name !== 'erro') {
        return this.$route.name
      }
    }
  },
  mounted () {
    if(localStorage.userToken == null){
      setTimeout(() =>{
        this.$root.$emit('Spinner::hide')
      },300);
      this.$router.push({ name: 'login'})
    }
    
    setTimeout(() =>{
      this.$root.$emit('Spinner::hide')
    },300);
  }
}
</script>

<style lang="scss">
</style>
