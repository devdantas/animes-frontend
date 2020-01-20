<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #f6f7f9; box-shadow: 0px 0px 5px 1px #d34178;">
    <a class="navbar-brand" href="/">
      <img src="https://image.flaticon.com/icons/png/128/753/753352.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Animes Free
    </a>
    <button id="toggle" class="navbar-toggler" type="button" @click="showMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <template>
        <router-link
          :key="index"
          tag="li"
          exact-active-class="active"
          :to="{ name: item.name }"
          v-for="(item, index) in routesM"
          class="nav-item"
          style="text-decoration: none;"
          refresh
        >
          <a href="#" class="nav-link">
            {{ item.meta.title }}
          </a>
        </router-link>
      </template>
    </ul>
    <button v-if="token" class="btn btn-danger my-2 my-sm-0" @click="logout">Sair</button>
  </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      token: sessionStorage.getItem('userToken')
    }
  },
  computed: {
    routesM () {
      return this.$router.options.routes.filter(route => route.meta)
    }
  },
  methods: {
    logout () {
      sessionStorage.removeItem('userToken')
      this.$router.push({ name: 'login' })
    },
    showMenu () {
      let divDisplay = document.getElementById('navbarTogglerDemo01')

      if (divDisplay.style.display === '') {
        divDisplay.style.display = 'block'
      } else {
        divDisplay.style.display = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {
  color: var(--featured) !important;
}

</style>
