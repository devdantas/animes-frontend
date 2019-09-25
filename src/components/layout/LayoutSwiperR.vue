<template>
  <div id="swiper-r">
    <div class="swiper-container s2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://nerdgeekfeelings.com/wp-content/uploads/2014/07/shingeki-no-kyojin-poster.jpg">
        </div>        
        <div class="swiper-slide">
          <img src="https://static.posters.cz/image/750/plakaty/attack-on-titan-shingeki-no-kyojin-season-2-collage-key-art-i66601.jpg">
        </div>
        <div class="swiper-slide">
          <img src="http://anmtv.xpg.com.br/wp-content/uploads/shingeki-no-kyojin-poster-1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="https://cdn.europosters.eu/image/750/posters/my-hero-academia-season-1-i56127.jpg">
        </div>
        <div class="swiper-slide">
          <img src="https://animesonline.site/wp-content/uploads/2019/06/MV5BYWQ0NGY3ODktY2YxMy00NDk3LWE4ZDYtMTdmNGZiNWU1MjM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg">
        </div>
        <div class="swiper-slide">
          <img src="https://img1.ak.crunchyroll.com/i/spire1/281089c6a9e64236a10e3b4232474e411532451975_full.jpg">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper.esm.bundle"
export default {
  name: "swiper-recent",
  mounted() {
    var swiper2 = new Swiper('.s2', {
      slidesPerView: 5,
      spaceBetween: 25,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;

  @media (max-width: 576px) {
    width: 100%;
    height: 30%;
  }  
}
.swiper-slide {
  background: var(--featured);
  overflow: hidden;
  border-radius: .25rem;
  margin-bottom: 10px;
  box-shadow: 1px 3px 19px rgba(0,0,0,0.1); 
  transition: all .25s ease;
  img {
    width: 100%;
    height: 45vh;    

    &:hover{
      transform: translateY(-7px);
      transition: all 0.6s;
      cursor: pointer;
    }

    @media (max-width: 576px) { 
      height: 55vh;
    }
  }

  .label {
    padding: 2px;
    label {
      color: var(--light);
      text-align: center;
      display: table;
      width: 100%;
      height: auto;
    }
  }
}
</style>