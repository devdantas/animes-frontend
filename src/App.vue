<template>
  <div id="app">
    <layout-notification/>

    <header>
      <layout-navigation v-if="showNavBar"/>
    </header>
    <main class="wrapper">
      <router-view/>
    </main>
    <div class="push"></div>
    <footer class="footer">
      <layout-footer/>
    </footer>
  </div>
</template>

<script>
import LayoutNotification from './components/global/LayoutNotification'
import LayoutNavigation from './components/layout/LayoutNavigation'
import LayoutFooter from './components/layout/LayoutFooter'

export default {
  name: 'App',
  components: {
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
  }
}
</script>

<style lang="scss">
.wrapper {
  min-height: 100%;
  margin-bottom: -100px;
}
.footer, .push {
    min-height: 168px;
    max-height: 140px;
}
</style>
