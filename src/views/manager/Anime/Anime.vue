<template>
  <div class="anime">
    <div class="container">
      <h2 class="pt-3">Animes</h2>
        <template v-if="token">
          <button
            @click="openPageAddAnime" 
            type="button"
            class="btn btn-sm btn-outline-primary"
          >
            Adicionar anime
          </button>
        </template>   
        <hr>
        <div class="row justify-content-end">
          <div class="col-sm-4 col-lg-4 col-md-4">
            <input class="form-control form-control-sm" type="text" v-model="search" placeholder="Buscar anime">
          </div>
        </div>    
      <div class="row" v-if="filtrarAnimes.length > 0">
        <div 
          :key="index"
          class="col-lg-2 col-md-4 py-3"
          v-for="(item, index) in filtrarAnimes"
        >
          <div class="anime-looping">
            <div
              @click="openShowAnime(item.slug)"
              class="capa-looping" 
              :style="{ background: `url('${item.thumb}') center / cover no-repeat`}" 
            >
            </div>
            <div v-if="item.episodeos.length > 0" class="nome-looping">{{item.name}}</div>
            <div v-else class="nome-looping" style="color: #ec3c3c">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="row" v-else>
        <div class="col-sm-12">
          <h1>Não encontrado: {{this.search}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Animes from '../../../services/animes'
import { setTimeout } from 'timers';
export default {
  name: 'animes',
  data () {
    return {
      search: '',
      token: sessionStorage.getItem('userToken'),
      catalago: []
    }
  },
  computed: {
    filtrarAnimes() {
       return this.catalago.filter(c => {
        return c.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created () {
    this.listar()
    document.title = "Animes"
  },
  methods: {    
    async listar() {      
      await Animes.index().then(res => {
        this.catalago = res.data.anime
      }).catch(err => {
        this.$root.$emit('Notification::show', {
          type: 'danger',
          message: 'Ocorreu algum erro, tente mais tarde!'
        })
      })
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
.page-link {
  &:hover {
    cursor: pointer;
  }
}
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
    color: var(--light);
    font-weight: 600;
    text-align: center;
    display: table;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>