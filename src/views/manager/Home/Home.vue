<template>
  <div class="home">
      <base-spinner/>
      <div id="swiper-prime">
        <swiper-prime/>
      </div>
      <div class="container mt-2 mb-1">
        <div id="swiper-recent">
          <div class="title-temporada mb-2">
            <h2>Animes da Temporada</h2>
          </div>
          <swiper-recent/>
        </div>
      </div>
      <div class="container-fluid mt-3">
        <div class="row mt-3">
          <div class="col-lg-9 col-sm-12">
            <div class="card pt-2 pb-2 pl-2 pr-2">
              <h3 class="text-center">Últimos lançamentos</h3>
              <div class="container">
                <last-episodeos/>               
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12">
            <div class="row">
              <div class="col-sm-12 col-lg-12 col-md-12">
                <div class="card text-center pt-2 mb-2">
                  <h3>Acesse nosso Discord</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-lg-12 col-md-12">
                <div class="card pt-2 pb-2 pl-2 pr-2">
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
      </div>      
  </div>
</template>

<script>
import BaseSpinner from '../../../components/global/BaseSpinner'
import SwiperPrime from '../../../components/layout/LayoutSwiper'
import SwiperRecent from '../../../components/layout/LayoutSwiperR'
import LastEpisodeos from '../../../components/layout/LayoutLastEpisodeos'
import LayoutFooter from '../../../components/layout/LayoutFooter'
export default {
  name: "home",
  components: {
    BaseSpinner,
    SwiperPrime,
    SwiperRecent,
    LastEpisodeos,
    LayoutFooter
  },
  created() {
    document.title = "Animes Free"
  },
  mounted() {
    setTimeout(() =>{
      this.$root.$emit('Spinner::hide')
    },1500);
  }
}
</script>


<style lang="scss" scoped>
.border-primary {
  border: solid 0.5px var(--featured) !important;
}
#swiper-recent {
  .title-temporada {
    padding: 5px;
    text-align: center;
    border-radius: 5px;
    background-color: var(--featured-second-dark);
  }
}
</style>