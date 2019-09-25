<template>
  <div class="player">
    <div class="container-fluid">      
      <div class="row pt-2 pb-3">
        <div class="col-lg-8 col-sm-12 col-md-12">
          <div v-if="show" class="alert alert-info alert-dismissible fade show">
              <strong>
                Selecione uma qualidade de sua preferência na <i class="fas fa-cog"></i> para ininiar o episódio.
              </strong>
            <button type="button" class="close" @click="close()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <vue-plyr class="border border-dark" ref="plyr">
            <video id="player" poster="https://i.ibb.co/JqyyWnk/banner-player.png">
              <source id="src480" :src="this.list.link480p" type="video/mp4" size="480"/>
              <source :src="this.list.link720p" type="video/mp4" size="720"/>
              <source :src="this.list.link1080p" type="video/mp4" size="1080"/>
            </video>
          </vue-plyr>
          <div class="footer-player mt-2 pl-2 pt-2 card">
            <h4>
              <strong>{{this.list.title}}</strong>
            </h4>
            <h5>{{this.list.name}}</h5>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-12 mt-2">
          <div class="card">
            <div class="row pl-1 pt-1 title-list">
              <div class="col-lg-12 col-sm-12 col-md-12">
                <h3>Lista de Episódios</h3>
              </div>
            </div>
            <div class="opacity-list">
              <div class="row pl-3 pt-1" v-if="this.episodios.length > 0">
                  <ul class="">
                    <router-link
                      :key="index"
                      tag="li"
                      v-for="(item, index) in episodios"
                      exact-active-class="active"
                      :to="{name: 'player', params: {slug: item.slug}}"
                      refresh
                    >
                      Assistir {{item.title}}
                    </router-link>
                  </ul>
              </div>
              <div class="row pl-3" v-else>
                <div class="col-lg-12 col-sm-12 col-md-12 text-center mt-5">
                  <img src="https://image.flaticon.com/icons/png/128/753/753352.png" width="50" height="50" class="d-inline-block align-top" alt="">
                  <h3>Carregando...</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-2 text-center">
            <h1>Anúncios</h1>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-sm-12 col-lg-12 col-md-12">
          <div class="comments p-2">
            <vue-disqus shortname="animesfree-1" :title="this.list.name + ' - ' + this.list.title"></vue-disqus>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Episodio from "../../../services/animes"
import LayoutFooter from '../../../components/layout/LayoutFooter'
export default {
  name: "player",
  components: {
    LayoutFooter
  },
  computed: {
    player() {
      return this.$refs.plyr.player;
    }
  },
  data() {
    return {
      list: {
        name: "",
        title: "",
        link480p: "",
        link720p: "",
        link1080p: ""
      },
      episodios: [],  
      slugAnime: "",
      show: true
    };
  },
  watch: {
    $route(to, from) {
      window.location.href = '/online/'+to.params.slug
    }
  }, 
  beforeMount(){
    this.setLinks(this.$attrs.slug)
  },
  methods: {
    async setLinks(slug) {
      await Episodio.specificEpisodio(slug)
        .then(res => {
          this.list.name = res.data.episodeo.anime.name
          this.getEpisodios(res.data.episodeo.anime.name.replace(/\s/g, '-').toLowerCase())
          this.list.title = res.data.episodeo.title
          this.list.link480p = res.data.episodeo.links[0].link480p
          this.list.link720p = res.data.episodeo.links[0].link720p
          this.list.link1080p = res.data.episodeo.links[0].link1080p
          document.title = res.data.episodeo.anime.name + ' - ' + res.data.episodeo.title
        })
        .catch(err => {
          this.$root.$emit("Notification::show", {
            type: "danger",
            message: "Ocorreu algum erro, tente mais tarde!"
          });
        });
    },
    async getEpisodios(slug){
      await Episodio.show(slug).then(res => {
        this.episodios = res.data.anime[0].episodeos
      }).catch(err => {
        if(err.response.data.error === "Anime not register"){
          this.$router.push({name: 'erro'})
        }
      })
    },
    close () {
      this.show = false
    }
  }
};
</script>

<style lang="scss" scoped>
.title-list {
  text-align: center;
}
.opacity-list {
  background-color: #464b57d2;
  overflow-y: auto;
  overflow-x: hidden;
  height: 390px;
  /* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
}

ul {
  list-style: none;
  padding: 3px;
  width: calc(100% - 11px);
  li {
    font-size: 20px;
    padding-left: 20px;
    &:hover {
      background-color: #6d7485;
      cursor: pointer;
    }
  }
  li.active {
    background-color: #6d7485;
  }
}
</style>