<template>
  <div class="home">
      <div id="swiper-prime">
        <swiper-prime/>
      </div>
      <div class="container-fluid mt-3">
        <div id="swiper-recent">
          <h4>Adicionados Recentemente:</h4>
          <swiper-recent/>
        </div>
        <div class="row mt-3">
          <div class="col-lg-9 col-sm-12">
            <div class="card border border-primary">
              <h3>Aqui vai ser os ultimos ep</h3>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12">
            <div class="card border-primary">
              <h3>Aqui vai ser as redes sociais</h3>              
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SwiperPrime from '../../../components/layout/LayoutSwiper'
import SwiperRecent from '../../../components/layout/LayoutSwiperR'
export default {
  name: "home",
  components: {
    SwiperPrime,
    SwiperRecent
  }
}
</script>


<style lang="scss" scoped>
.border-primary {
  border: solid 0.5px var(--featured) !important;
}
</style>