<template>
  <div id="app">
    <base-spinner/>
    <layout-notification/>

    <layout-navigation v-if="showNavBar"/>
      <router-view/>
    <layout-footer/>
  </div>
</template>

<script>
import BaseSpinner from './components/global/BaseSpinner'
import LayoutNotification from './components/global/LayoutNotification'
import LayoutNavigation from './components/layout/LayoutNavigation'
import LayoutFooter from './components/layout/LayoutFooter'
import { setTimeout } from 'timers';

export default {
  name: 'App',
  components: {
    BaseSpinner,
    LayoutNotification,
    LayoutNavigation,
    LayoutFooter
  },
  computed: {
    showNavBar(){
      if(this.$route.name !== 'login' && this.$route.name !== 'erro') {
        return this.$route.name
      }
    }
  },
  mounted() {
    this.$root.$emit('Spinner::hide')
  },
}
</script>

<style lang="scss">
footer{
  width: 100%;
  height: 50px;
  margin: auto;
  bottom: 0;
}
</style>
