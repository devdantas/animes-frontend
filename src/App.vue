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
export default {
  name: 'App',
  components: {
    LayoutNotification,
    LayoutNavigation
  },
  computed: {
    showNavBar () {
      let res = null
      if (this.$route.name !== 'login' && this.$route.name !== 'erro') {
        res = this.$route.name
      }
      return res
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
