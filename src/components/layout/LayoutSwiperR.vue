<template>
  <div id="swiper-r">
    <div class="swiper-container s2">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          style="background-image: url('https://nerdgeekfeelings.com/wp-content/uploads/2014/07/shingeki-no-kyojin-poster.jpg');"
        >
          <div class="name-anime">
            <strong>Shingeki no Kyojin</strong>
          </div>
        </div>
        <div
          class="swiper-slide"
          style="background-image: url('https://static.posters.cz/image/750/plakaty/attack-on-titan-shingeki-no-kyojin-season-2-collage-key-art-i66601.jpg');"
        >
          <div class="name-anime">
            <strong>Shingeki no Kyojin 2</strong>
          </div>
        </div>
        <div
          class="swiper-slide"
          style="background-image: url('http://anmtv.xpg.com.br/wp-content/uploads/shingeki-no-kyojin-poster-1.jpg');"
        >
          <div class="name-anime">
            <strong>Shingeki no Kyojin 3</strong>
          </div>
        </div>
        <div
          class="swiper-slide"
          style="background-image: url('https://cdn.europosters.eu/image/750/posters/my-hero-academia-season-1-i56127.jpg');"
        >
          <div class="name-anime">
            <strong>My Hero Academia</strong>
          </div>
        </div>
        <div
          class="swiper-slide"
          style="background-image: url('https://animesonline.site/wp-content/uploads/2019/06/MV5BYWQ0NGY3ODktY2YxMy00NDk3LWE4ZDYtMTdmNGZiNWU1MjM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg');"
        >
          <div class="name-anime">
            <strong>My Hero Academia 2</strong>
          </div>
        </div>
        <div
          class="swiper-slide"
          style="background-image: url('https://img1.ak.crunchyroll.com/i/spire1/281089c6a9e64236a10e3b4232474e411532451975_full.jpg')"
        >
          <div class="name-anime">
            <strong>My Hero Academia 3</strong>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="swiper-button-next">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.esm.bundle'
export default {
  name: 'swiper-recent',
  mounted () {
    // eslint-disable-next-line no-unused-vars
    var swiper2 = new Swiper('.s2', {
      slidesPerView: 5,
      spaceBetween: 25,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    })
  }
}
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
  display: flex;
  align-items: flex-end;
  border-radius: .25rem;
  box-shadow: 1px 3px 19px rgba(0,0,0,0.1);
  background-size: cover;
  height: 300px;
  overflow: hidden;
  margin-bottom: 10px;
  transition: all .25s ease;

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
.name-anime {
  background-color: rgba(0,0,0,0.9);
  width: 100%;
  height: auto;
  padding: 10px 0px 10px 0px;
  text-align: center;
  strong {
    font-size: 13pt;
  }
}
.swiper-button-prev, .swiper-button-next {
  background: none;
  background-color: #fff;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fa-chevron-left, .fa-chevron-right {
  color: var(--featured);
  font-size: 2rem;
}
</style>
