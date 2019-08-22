<template>
  <div class="anime">
    <div class="container">
      <h2 class="pt-2">Animes</h2>
        <button
          v-if="token"
          @click="openPageAddAnime" 
          type="button"
          class="btn btn-sm btn-outline-primary"
        >
            Adicionar anime
        </button>
      <hr>

      <div class="row">
        <div 
          :key="index"
          class="col-lg-2 col-md-4 py-3"
          v-for="(item, index) in catalago"
        >
          <div class="anime-looping">
            <div
              @click="openShowAnime(item.slug)"
              class="capa-looping" 
              :style="{ background: `url('${item.thumb}') center / cover no-repeat`}" 
            >
            </div>
            <div class="nome-looping">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Animes from '../../../services/animes'
export default {
  name: "animes",
  data () {
    return {
      token: localStorage.getItem('userToken'),
      catalago: []
    }
  },
  created () {
    this.listar()
  },
  methods: {
    async listar() {
     this.$root.$emit('Spinner::show')
      await Animes.index().then(res => {
        this.catalago = res.data.anime
      })
     this.$root.$emit('Spinner::hide')
    },
    
    openShowAnime(slug){
      this.$router.push({name: 'showanime', params: {slug: slug}})
    },
    openPageAddAnime() {
      this.$router.push({name: 'add-anime'})
    }
  }
};
</script>


<style lang="scss" scoped>
.anime-looping {
  .capa-looping {
    height: 33vh;
    position: relative;
    overflow: hidden;
    border-radius: .25rem;
    margin-bottom: 10px;
    box-shadow: 1px 3px 19px rgba(0,0,0,0.1);
    transition: all .25s ease;

    &:hover{
      transform: translateY(-5px);
      transition: all 0.6s;
      cursor: pointer;
    }
  }
  .nome-looping {
    color: #4d535f;
    font-weight: 600;
    text-align: center;
    display: table;
    width: 100%;
    margin-bottom: 10px;
  }

  .classificacao {
    display: inline-block;
    margin-left: 10px;
    background-color: transparent;
    color: #fff;
    padding: 3px 7px;
    position: absolute;
    top: 0;
    right: 5px;
}
}
</style>