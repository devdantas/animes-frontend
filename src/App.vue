<template>
  <div id="app">
    <base-spinner/>
    <layout-notification/>

    <header>
      <layout-navigation v-if="showNavBar"/>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import LayoutNotification from './components/global/LayoutNotification'
import LayoutNavigation from './components/layout/LayoutNavigation'
import { setTimeout } from 'timers';

export default {
  name: 'App',
  components: {
    LayoutNotification,
    LayoutNavigation,
  },
  computed: {
    showNavBar(){
      if(this.$route.name !== 'login' && this.$route.name !== 'erro') {
        return this.$route.name
      }
    }
  }
}
</script>

<style lang="scss">
</style>
