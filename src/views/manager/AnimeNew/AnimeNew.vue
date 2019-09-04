<template>
  <div id="newAnime">
    <div class="container mb-3">
      <h3 class="pt-3">Adicionar novo anime</h3>
      <hr />

      <form @submit.prevent="submit">
        <h5 class="ml-3">Dados do anime</h5>
        <div class="dados">
          <div class="row">
            <div class="col-lg-12">
              <label class="col-form-label">Nome:</label>
              <input 
                v-model="form.name"
                type="text" 
                class="form-control" 
                required />
            </div>
            <div class="col-lg-12">
              <label class="col-form-label">Nome Alternativo:</label>
              <input 
                v-model="form.nameAlternative"
                type="text" 
                class="form-control" 
                required />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <label class="col-form-label">Ano de Lançamento:</label>
              <input
                v-model="form.year" 
                type="number" 
                class="form-control" 
                required />
            </div>
            <div class="col-lg-6">
              <label class="col-form-label">Quantidade de Episódios:</label>
              <input 
                v-model="form.numberEpisodes"
                type="number" 
                class="form-control" 
                required />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <label class="col-form-label">Sinopse:</label>
              <textarea
                v-model="form.sinopse" 
                class="form-control" 
                style="resize: none;" 
                rows="5" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <label class="col-form-label">Thumbnail link:</label>
              <input
                v-model="form.thumb" 
                type="url" 
                class="form-control" 
                required />
            </div>
          </div>
        </div>

        <h5 class="ml-3 mt-3 mb-2">Tipo do anime</h5>
        <div class="dados">
          <div class="row">
            <div class="col-lg-12">
              <div
                :key="index"
                v-for="(itemT, index) in type"
                class="custom-control custom-radio custom-control-inline"
              >
                <input
                  :id="'customRadio'+ index"
                  :value="itemT._id"
                  v-model="form.type"
                  type="radio"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" :for="'customRadio'+index">{{itemT.name}}</label>
              </div>
            </div>
          </div>
        </div>

        <h5 class="ml-3 mt-3 mb-2">Qualidade</h5>
        <div class="dados">
          <div class="row">
            <div class="col-lg-12">
              <div
                :key="index"
                v-for="(itemR, index) in typeRaw"
                class="custom-control custom-radio custom-control-inline"
              >
                <input
                  :id="'customRadioQ'+ index"
                  :value="itemR._id"
                  v-model="form.typeRaw"
                  type="radio"
                  name="customRadioQ"
                  class="custom-control-input"
                />
                <label class="custom-control-label" :for="'customRadioQ'+index">{{itemR.name}}</label>
              </div>
            </div>
          </div>
        </div>

        <h5 class="ml-3 mt-3 mb-2">Gêneros</h5>
        <div class="dados">
          <div class="row">
            <div class="col-lg-12">
              <ul class="ks-cboxtags">
                <li
                  :key="index"
                  v-for="(itemG, index) in genders"
                >
                  <input 
                    :id="'checkbox'+index" 
                    :value="itemG._id"
                    v-model="form.genders"
                    type="checkbox"
                  />
                  <label :for="'checkbox'+index">{{itemG.name}}</label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h5 class="ml-3 mt-3 mb-2">Episódios</h5>
        <div class="dados">
          <div class="row justify-content-end mr-3">
              <button
                type="button"
                @click="addEpisodeo"
                class="btn btn-sm btn-info"
              >Adicionar Episódio</button>
          </div>
          <div class="episodeos mt-2" :key="index" v-for="(episodeo, index) in form.episodeos">
            <div class="row">
              <div class="col-lg-12">
                <label class="col-form-label">Titulo do Episódio:</label>
                <input
                  v-model="form.episodeos[index].title" 
                  type="text" 
                  class="form-control" 
                  required />
              </div>
              <div class="col-lg-12">
                <label class="col-form-label">Link 480p:</label>
                <input
                  v-model="form.episodeos[index].links.link480p" 
                  type="url" 
                  class="form-control" 
                  required />
              </div>
              <div class="col-lg-12">
                <label class="col-form-label">Link 720p:</label>
                <input
                  v-model="form.episodeos[index].links.link720p" 
                  type="url" 
                  class="form-control" 
                  required />
              </div>
              <div class="col-lg-12">
                <label class="col-form-label">Link 1080p:</label>
                <input
                  v-model="form.episodeos[index].links.link1080p" 
                  type="url" 
                  class="form-control" 
                  required />
              </div>
              
              <div class="col-lg-12 mt-2">
                <button
                type="button"
                @click="deleteEpisodeo(index)"
                class="btn btn-sm btn-info"
                >Remover</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-end mt-3 mr-2">
          <button class="btn btn-success">
            <template v-if="loading">
              <i class="fa fa-spin fa-spinner"></i>
                Incluindo...
            </template>
            <template v-else>Cadastrar</template>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Aux from "../../../services/auxTTG";
import Anime from "../../../services/animes"
export default {
  name: "new-anime",
  data() {
    return {
      loading: false,
      type: [],
      typeRaw: [],
      genders: [],
      form: {
        thumb: '',
        name: '',
        nameAlternative: '',
        sinopse: '',
        type: '',
        year: '',
        numberEpisodes: '',
        typeRaw: '',
        genders: [],
        episodeos: []
      }
    };
  },
  created() {
    this.getType();
    this.getTypeRaw();
    this.getGenders();
  },
  methods: {
    clearInputs(){
      this.form.thumb = ''
      this.form.name = ''
      this.form.nameAlternative = ''
      this.form.sinopse = ''
      this.form.type = ''
      this.form.year = ''
      this.form.numberEpisodes = ''
      this.form.typeRaw = ''
      this.form.genders = []
      this.form.episodeos = []
    },
    submit() {
      this.loading = true;
      Anime.createNewAnime(this.form).then(res => {
        console.log(res)
        this.clearInputs()
        this.loading = false
      }).catch(err => {
        console.log(err)
        this.clearInputs()
        this.loading = false
      })
    },
    getType() {
      Aux.indexType()
        .then(res => {
          this.type = res.data.type;
        })
        .catch(err => {
          console.log("Type erro", err);
        });
    },
    getTypeRaw() {
      Aux.indexTypeRaw()
        .then(res => {
          this.typeRaw = res.data.typeRaw
        })
        .catch(err => {
          console.log("TypeRaw err", err);
        });
    },
    getGenders() {
      Aux.indexGender()
        .then(res => {
          this.genders = res.data.gender;
        })
        .catch(err => {
          console.log("Gender erro", err);
        });
    },
    addEpisodeo() {
      this.form.episodeos.push({
        title: '',
        links: {
          link480p: '',
          link720p: '',
          link1080p: ''
        }
      });
    },
    deleteEpisodeo(index) {
      this.form.episodeos.splice(index, 1);
      if (index === 0)
        this.addEpisodeo()
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-primary {
  color: var(--light) !important;
}
.episodeos {
  background-color: var(--light);
  border-radius: 10px;
  border: solid 0.5px var(--featured);
  padding: 13px;
  color: var(--featured-second-dark);
}

.dados {
  background-color: #dadada42;
  border-radius: 10px;
  border: solid 0.5px var(--featured);
  padding: 13px;

  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  input:focus {
    border: solid 0.5px var(--featured) !important;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  textarea:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  textarea:focus {
    border: solid 0.5px var(--featured) !important;
  }

  .custom-control-label:hover {
    cursor: pointer;
  }

  ul.ks-cboxtags {
    margin: 0px 0px 0px 3px;
    padding: 0;
    list-style: none;
    
    li {
      display: inline;

      input[type="checkbox"] {
        display: absolute;
        position: absolute;
        opacity: 0;
    }

      label{
        display: inline-block;
        background-color: rgba(255, 255, 255, .9);
        border: 2px solid rgba(139, 139, 139, .3);
        color: #adadad;
        border-radius: 25px;
        white-space: nowrap;
        margin: 3px 0px 0px 6px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        transition: all .2s;
        padding: 8px 12px;
        cursor: pointer;
      }

      label::before {
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 12px;
        padding: 2px 6px 2px 2px;
        content: "\f067";
        transition: transform .3s ease-in-out;
      }
    }
  }

  ul.ks-cboxtags li input[type="checkbox"]:checked + label::before {
      content: "\f00c";
      transform: rotate(-360deg);
      transition: transform .3s ease-in-out;
  }

  ul.ks-cboxtags li input[type="checkbox"]:checked + label {
      border: 2px solid #1bdbf8;
      background-color: #12bbd4;
      color: #fff;
      transition: all .2s;
  }
}
</style>