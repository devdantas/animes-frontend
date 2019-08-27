<template>
  <div class="home">
    <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="height: 80vh">
            <div
              class="parallax-bg"
              style="background-color: rgb(147, 165, 165);"
              data-swiper-parallax="-23%"
            ></div>
            <div class="image-c" data-swiper-parallax="-300" data-swiper-parallax-opacity="0">
              <img src="https://i.ibb.co/ZgBjrMR/tate-no-yuusha.png" />
            </div>
            <div
              class="div-title"
              data-swiper-parallax="-300"
              data-swiper-parallax-opacity="0"
            >
              <h1>Tate no Yuusha no Nariagari</h1>
            </div>
            <div class="text" data-swiper-parallax="-100">
              <p>Tate no Yuusha (apelidado de ‘ShieldBro’) acompanha um universitário que acaba indo parar em um mundo de fantasia, junto a outros estudantes. Cada um deles recebe uma arma lendária, sendo a do protagonista um escudo. Traído logo que chega lá, ele muda rapidamente sua atitude positiva para o ódio e desejo de vingança, até que encontra uma pequena escrava, que começa a ajudá-lo a mudar.</p>
              <p>
                Gêneros:
                <b>Ação, Aventura, Comédia, Drama, Fantasia, Romance, Seinen</b>
              </p>
              <p>
                <button type="button" class="btn btn-md btn-primary">Acessar</button>
              </p>
            </div>
          </div>
          <div class="swiper-slide">
            <div
              class="parallax-bg"
              style="background-color: rgb(115, 122, 122);"
              data-swiper-parallax="-23"
            ></div>
            <div class="div-title" data-swiper-parallax="-300">
              <h1>Slide 1</h1>
            </div>
            <div class="text" data-swiper-parallax="-100">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-white"></div>
        <!-- Add Navigation -->
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper.esm.bundle";

export default {
  name: "home",
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      speed: 600,
      autoplay: {
        delay: 5000
      },
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>


<style lang="scss" scoped>
.btn-primary {
  border-radius: 10px;
}
.swiper-container {
  width: 100%;
  height: 100%;
  background: #000;

  .swiper-slide {
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;

    @media (max-width: 576px) {
      padding: 20px 30px;
    }
    @media (max-width: 768px) {
      padding: 20px 30px;
    }

    .text {
      font-size: 16px;
      max-width: 450px;
    }

    .title {
      font-size: 35px;

      @media (max-width: 576px) {
        font-size: 30px;
      }
      @media (max-width: 768px) {
        font-size: 30px;
      }
    }

    .image-c {
      float: right;
      width: 55vw;
      height: 100vh;
      padding: 15px 15px 100px 150px;

      img {
        width: 30vw;
        margin-bottom: 50px;
        position: relative;
        @media (max-width: 576px) {
          display: none;
        }
        @media (max-width: 768px) {
          display: none;
        }
      }
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
}
</style>