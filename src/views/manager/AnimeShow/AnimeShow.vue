<template>
  <div class="anime">
    <div class="container mb-3">
      <hr />
      <div class="row">
        <div class="col-lg-3 col-sm-12">
          <div
            class="capa-looping"
            :style="{ background: `url('${this.specific.thumb}') center / cover no-repeat`}"
          ></div>
          <div class="description mb-3">
            <span>
              <i class="fas fa-calendar-alt"></i>
              <label class="text-muted ml-2">Exibido em: {{this.specific.year}}</label>
            </span>
            <br />
            <span>
              <i class="fas fa-file-video"></i>
              <label class="text-muted ml-2">Tipo: {{this.specific.type.name}}</label>
            </span>
            <br />
            <span>
              <i class="fas fa-compact-disc"></i>
              <label class="text-muted ml-2">Qualidade: {{this.specific.typeRaw.name}}</label>
            </span>
            <br />
            <span>
              <i class="fas fa-film"></i>
              <label class="text-muted ml-2">Quantidade: {{this.specific.numberEpisodes}}</label>
            </span>
          </div>
        </div>

        <!-- dados -->
        <div class="col-lg-9">
          <div class="container">
            <!-- nome -->
            <div class="row nome">
              <div class="col-lg-12">
                <h3>{{this.specific.name}}</h3>
                <hr />
              </div>
            </div>
            <!-- #nome -->

            <!-- generos -->
            <div class="row">
              <div class="col-lg-12">
                <div class="genero">
                  <h5>
                    Gêneros:
                    <label
                      :key="index"
                      v-for="(item, index) in this.specific.genders"
                      class="mr-1 backlabel"
                    >{{item.name}}</label>
                  </h5>
                </div>
              </div>
            </div>
            <!-- #generos -->

            <!-- sinopse -->
            <div class="row">
              <div class="col-lg-12">
                <h5>Sinopse:</h5>
                <div class="sinopse">
                  <p>{{this.specific.sinopse}}</p>
                </div>
              </div>
            </div>
            <!-- #sinopse -->

            <!-- btn add -->
            <div class="row mt-2 float-right">
              <div class="col-lg-12">
                <button
                  @click="showModal = true"
                  class="btn btn-sm btn-outline-primary"
                >Adicionar Episódio</button>
              </div>
            </div>
            <!-- #btn add -->

            <div class="row mt-5">
              <div class="col-lg-12">
                <h5>Links</h5>
              </div>
            </div>

            <div class="row">
              <div
                :key="index"
                class="col-lg-4 mt-1 col-sm-2"
                v-for="(item, index) in this.specific.episodeos"
              >
                <div class="episodeos">
                  <div class="title">{{item.title}}</div>
                  <div :key="indexL" class="link" v-for="(itemL, indexL) in item.links">
                    <div class="manager-view" v-if="token">
                      <layout-modal
                        v-bind:episodeoId="item._id"
                        v-bind:titleA="item.title"
                        v-bind:link720p="itemL.link720p"
                        v-bind:link1080p="itemL.link1080p"
                        class="layout-modal"
                      />
                    </div>
                    <div class="user-view" v-else>
                      <layout-player
                        v-bind:titleA="item.title"
                        v-bind:link720p="itemL.link720p"
                        v-bind:link1080p="itemL.link1080p"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- #fim dados -->
      </div>
    </div>
    <form @submit.prevent="adicionar">
      <div
        id="modalL"
        class="modal fade"
        :class="{show: showModal}"
        style="display: block;"
        :style="{display: showModal ? 'block' : 'none'}"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 slot="title" class="modal-title" id="exampleModalLiveLabel">Adicionar episódio</h5>
              <button type="button" @click="closeModal()" class="close">
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div class="modal-body">
              <div class="row">
                <div class="form-group col-sm-6">
                  <label class="col-form-label">Titulo:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Episódio X"
                    v-model="form.episodeos[0].title"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label class="col-form-label">Link 720p:</label>
                  <input
                    type="url"
                    class="form-control"
                    v-model="form.episodeos[0].links.link720p"
                    required
                  />
                </div>
                <div class="form-group col-sm-6">
                  <label class="col-form-label">Link 1080p:</label>
                  <input
                    type="url"
                    class="form-control"
                    v-model="form.episodeos[0].links.link1080p"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" @click="closeModal()" class="btn btn-secondary">Fechar</button>
              <button type="submit" class="btn btn-primary">
                <template v-if="loading">
                  <i class="fa fa-spin fa-spinner"></i>
                  Incluindo...
                </template>
                <template v-else>Adicionar</template>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div
      class="modal-backdrop fade"
      :style="{display: showModal ? 'block' : 'none'}"
      :class="{show: showModal}"
    ></div>
  </div>
</template>

<script>
import Animes from "../../../services/animes";
import LayoutModal from "../../../components/layout/LayoutModalPutEp";
import LayoutPlayer from "../../../components/layout/LayoutPlayerVideo"
export default {
  name: "showanime",
  components: {
    LayoutModal,
    LayoutPlayer
  },
  data() {
    return {
      loading: false,
      showModal: false,
      specific: [],
      slug: this.$attrs.slug,
      token: false,
      form: {
        episodeos: [
          {
            title: "",
            links: {
              link720p: "",
              link1080p: ""
            }
          }
        ]
      }
    };
  },
  created() {
    this.show()
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    async show() {
      this.$root.$emit("Spinner::show");
      await Animes.show(this.slug).then(res => {
        this.specific = res.data.anime[0];
      });
      this.$root.$emit("Spinner::hide");
    },
    adicionar() {
      this.loading = true;
      Animes.add(this.form, this.specific._id).then(res => {
        this.showModal = false;
        this.form.episodeos[0].title = "";
        this.form.episodeos[0].links.link720p = "";
        this.form.episodeos[0].links.link1080p = "";
        this.show();
        this.loading = false;
      }).catch(err => {
        this.$root.$emit('Notification::show', {
          type: 'danger',
          message: 'Ocorreu algum erro, tente mais tarde!'
        })
        this.loading = false
      })
    }
  }
};
</script>


<style lang="scss" scoped>
.btn-primary {
  color: var(--light) !important;
}

.capa-looping {
  height: 55vh;
  position: relative;
  overflow: hidden;
  border-radius: 0.25rem;
  margin-bottom: 10px;
  box-shadow: 1px 3px 19px rgba(0, 0, 0, 0.1);
  transition: all 0.25s ease;
}

.description {
  background-color: #f6f7f9;
  border-radius: 10px;
  border: solid 0.5px var(--featured);
  padding: 12px;

  i {
    font-size: 1.5em;
    color: var(--featured-second);
  }
}

.episodeos {
  display: table;
  background-color: #f6f7f9;
  border: solid 0.5px var(--featured);
  width: 100%;

  .title {
    width: 46%;
    color: var(--light);
    background-color: var(--featured);
    padding: 5px;
    box-sizing: content-box;
    float: left;
  }

  .link {
    padding: 5px 5px 5px 15px;
    .user-view {
      a {
        text-decoration: none;
        color: var(--featured);
      }
    }
  }
}

.sinopse {
  background-color: #f6f7f9;
  border-radius: 10px;
  border: solid 0.5px var(--featured);
  padding: 12px;
}

.backlabel {
  background-color: #f6f7f9;
  border-radius: 40px;
  border: solid 0.5px var(--featured);
  font-size: 15px;
  padding: 5px;
}

.btn-outline-primary {
  border-radius: 50px;
}
</style>