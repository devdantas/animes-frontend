<template>
  <div id="last-episodeos">
    <div class="row">
      <div 
        :key="index"
        v-for="(item, index) in filterAnime"
        class="col-lg-3 col-md-4 col-sm-6 py-3">
        <div class="anime-looping">
          <div
            @click="openShowAnime(item.anime.slug)"
            class="capa-looping" 
            :style="{ background: `url('${item.anime.thumb}') center / cover no-repeat`}"  
          >
          </div>
            <div class="nome-looping">{{item.anime.name}}</div>
            <div class="title-looping">{{item.title}}</div>
        </div>
      </div>
    </div>
    
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Páginas</a>
        </li>
        <li
          :key="i"
          v-for="i in totalpages"
          class="page-item">
          <label class="page-link" style="cursor: pointer" @click="listar(i)">{{i}}</label>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Episodeos from '../../services/animes'
import orderBy from 'lodash.orderby'
export default {
  name: 'last-episodeos',
  data () {
    return {
      list: [],
      totalpages: ''
    }
  },
  computed: {
    filterAnime() {
      return this.list    
    }
  },
  created () {
    this.listar(1)
  },
  methods: {
    async listar(page) {
     this.$root.$emit('Spinner::show')
      await Episodeos.indexEp(page).then(res => {
        this.list = res.data.episodeo.docs
        this.totalpages = res.data.episodeo.pages
      })
     this.$root.$emit('Spinner::hide')
    },
    openShowAnime(slug){
      this.$router.push({name: 'showanime', params: {slug: slug}})
    },
    compare(a,b) {
      return a.data < b.data;
    }
  }
}
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
    color: var(--light);
    font-weight: 600;
    text-align: center;
    display: table;
    width: 100%;
    margin-bottom: 2px;
  }
  .title-looping {
    color: var(--light);
    font-weight: 600;
    text-align: center;
    display: table;
    width: 100%;
    margin-bottom: 2px;
  }
}
</style>