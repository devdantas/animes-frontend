<template>
  <div class="home">
      <div id="swiper-prime">
        <swiper-prime/>
      </div>
      <div class="container-fluid mt-3">
        <div id="swiper-recent">
          <h3>Séries adicionadas recentemente:</h3>
          <swiper-recent/>
        </div>
        <div class="row mt-3 mb-5">
          <div class="col-lg-9 col-sm-12">
            <div class="card border border-primary pt-2 pb-2 pl-2 pr-2">
              <h3 class="text-center">Últimos lançamentos</h3>
              <div class="container">
                <last-episodeos/>               
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12">
            <div class="card border-primary pt-2 pb-2 pl-2 pr-2">
              <iframe 
                src="https://discordapp.com/widget?id=553382137391480843&theme=dark" 
                width="100%" 
                height="300" 
                allowtransparency="true" 
                frameborder="0">
              </iframe>           
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SwiperPrime from '../../../components/layout/LayoutSwiper'
import SwiperRecent from '../../../components/layout/LayoutSwiperR'
import LastEpisodeos from '../../../components/layout/LayoutLastEpisodeos'
export default {
  name: "home",
  components: {
    SwiperPrime,
    SwiperRecent,
    LastEpisodeos
  }
}
</script>


<style lang="scss" scoped>
.border-primary {
  border: solid 0.5px var(--featured) !important;
}
</style>