<template>
  <div class="login">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-6 col-md-5 col-lg-4">
          <div class="form-login">
            <form @submit.prevent="doLogin">
              <center>
                <img
                  class="mb-4"
                  src="https://image.flaticon.com/icons/png/128/753/753352.png"
                  width="72"
                  height="72"
                />                
              </center>
              <h1 class="h3 mb-3 font-weight-normal" align="center">Animes Online</h1>
              <div class="form-group">
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  autocomplete="off"
                  placeholder="E-mail"
                  v-model="user.email"
                />
              </div>
              <div class="form-group">
                <input
                  id="pass"
                  type="password"
                  class="form-control"
                  autocomplete="off"
                  placeholder="Senha"
                  v-model="user.password"
                />
              </div>

              <div align="right">
                <button type="submit" class="btn btn-primary" :disabled="loading">
                <template v-if="loading">
                  Entrando
                  <i class="fas fa-spinner fa-spin"></i>
                </template>
                <template v-else>
                  Entrar
                  <i class="fa fa-sign-in-alt"></i>
                </template>
              </button>
              </div>              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "../../../services/auth"

export default {
  name: "login",
  data () {
    return {
      loading: false,
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    doLogin() {
      this.loading = true

      Auth.login(this.user).then(res => {
        let token = res.data.token
        localStorage.userToken = token
        this.$router.push({ name: 'home'})
      }).catch(err => {
        alert("Usuário ou senha inválidos")
      })
    }
  }
};
</script>


<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-color: var(--featured);

  .container,
  .row {
    height: 100%;
    min-height: 100%;
  }

  color: var(--light);
}

.form-login {
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  
  h1 {
    color: #000;
  }
}
</style>