<template>
  <div id="notfound">
    <div class="container">
      <div class="row justify-content-center">
        <img src="https://i.ibb.co/zJnq1TP/notfound-2.png" width="30%" height="500px">
      </div>
      <div class="row justify-content-center mt-2">
        <h1>Página não encontrada</h1>
        <h5>Erro 404</h5>
      </div>
      <div class="row justify-content-center">
        <router-link to="/login">Voltar</router-link>
      </div>      
    </div>
  </div>  
</template>

<script>
export default {
  name: 'erro404'
}
</script>

<style>
</style>
