<template>
  <nav class="footer" style="background-color: #f6f7f9;">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-lg-3 col-md-3 p-3 pl-5">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li>
              <h5>Navegação</h5>
            </li>
            <router-link
              :key="index"
              tag="li"
              exact-active-class="active"
              :to="{ name: item.name }"      
              v-for="(item, index) in routes"
              class="nav-item"
              style="text-decoration: none;"
            >
              <a href="#" class="nav-link">
                {{ item.meta.title }}
              </a>
            </router-link>
          </ul>
        </div>
        <div class="col-sm-5 col-lg-5 col-md-5 p-3 pl-5">
          <h4 style="color: var(--dark);">Aviso</h4>
          <p style="color: var(--dark);">
            Todos os conteúdos disponibilizados pela Animes Free não estão hospedados em nosso site.
          </p>
        </div>
        <div class="col-sm-3 col-lg-3 col-md-3 p-2"  align="center">
          <a class="navbar-brand" href="/">
            <img src="https://image.flaticon.com/icons/png/128/753/753352.png" width="35" height="35" class="d-inline-block align-top" alt="">
            Animes Free
          </a>
          <h6 style="color: var(--dark);">Desenvolvido por Maurício Dantas</h6>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    routes() {
      return this.$router.options.routes.filter(route => route.meta);
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {
  color: var(--featured) !important;
  padding: 0;
}
a {
  text-decoration: none !important;
  color: var(--dark);
}
ul {
  list-style: none;
  li {
    color: var(--dark);
  }
}
</style>
