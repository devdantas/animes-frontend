<template>
  <div id="swiper">
    <div class="swiper-container s1">
      <div class="swiper-wrapper">
        <div 
          :key="index"
          v-for="(item, index) in swiper"
          class="swiper-slide">
          <div
            data-swiper-parallax="-23%"
            class="parallax-bg"
            :style="{'background-color': item.rgb}"
            style="transform: translate3d(0%, 0px, 0px); transition-duration: 0ms;"
          ></div>
          <div class="container pt-5">
            <div class="row">
              <div class="col-lg-6">
                <div
                  data-swiper-parallax="-300"
                  data-swiper-parallax-opacity="0"
                  class="div-title"
                  style="opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
                >
                  <h1>{{ item.title }}</h1>
                </div>
                <div
                  data-swiper-parallax="-100"
                  class="text"
                  style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
                >
                  <p>
                    {{ item.descricao }}
                  </p>
                  <p>
                    Gêneros:
                    <b>{{ item.generos }}</b>
                  </p>
                  <p>
                    <button
                      data-swiper-parallax="-100"
                      type="button"
                      class="btn btn-md btn-primary"
                    >Acessar</button>
                  </p>
                </div>
              </div>
              <div class="col-lg-6 pl-5 pb-5">
                <div
                  data-swiper-parallax="-300"
                  data-swiper-parallax-opacity="0"
                  style="opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
                >
                  <img :src="item.img" class="responsive-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper.esm.bundle"
import states from "../../services/swiper-contents.json"
export default {
  name: "swiper-show",
  computed: {
    swiper() {
      return states.contents.map(item => {
        return item
      })
    }
  },
  mounted() {
    var swiper = new Swiper(".s1", {
      speed: 600,
      autoplay: {
        delay: 5000
      },
      parallax: true
    });
  }
};
</script>

<style lang="scss" scoped>
body {
  background: #eee;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;
  height: 80vh;
}

.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  .title {
    font-size: 41px;
    font-weight: 300;
  }

  .text {
    font-size: 16px;
    max-width: 450px;
    line-height: 1.3;
  }
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}

.responsive-img {
  width: 100%;
  max-width: 420px;
  height: auto;

  @media (max-width: 576px) { 
    display: none;
  }
  @media (max-width: 768px) { 
    display: none;
  }
}
</style>