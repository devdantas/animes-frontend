<template>
  <div id="modal-att" slot="type">
    <label @click="showModal = true" class="title-type">Atualizar links</label>
    <form>
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
              <h5 slot="title" class="modal-title" id="exampleModalLiveLabel">
                Atualizar links do {{this.titleA}}
              </h5> 
              <button type="button" @click="closeModal()" class="close">
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div class="modal-body">
              <div class="row">
                <div class="form-group col-sm-12">
                  <label class="col-form-label">Link 480p:</label>
                  <input 
                    type="url" 
                    class="form-control" 
                    v-model="form.episodeos[0].links.link480p"
                    required />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-12">
                  <label class="col-form-label">Link 720p:</label>
                  <input 
                    type="url" 
                    class="form-control" 
                    v-model="form.episodeos[0].links.link720p"
                    required />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-12">
                  <label class="col-form-label">Link 1080p:</label>
                  <input 
                    type="url" 
                    class="form-control" 
                    v-model="form.episodeos[0].links.link1080p"
                    required />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" @click="closeModal()" class="btn btn-secondary">Fechar</button>
              <button type="button" class="btn btn-primary" @click="atualizar()">
                <template v-if="loading">
                  <i class="fa fa-spin fa-spinner"></i>
                  Incluindo...
                </template>
                <template v-else>Atualizar</template>
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
import Animes from '../../services/animes'
export default {
  name: "layoutmodal",
  props: {
    episodeoId: {
      type: String,
      required: true
    },
    titleA: {
      type: String,
      required: true
    },
    link480p: {
      type: String,
      required: true
    },
    link720p: {
      type: String,
      required: true
    },
    link1080p: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      showModal: false,
      form: {
        episodeos: [
          {
            title: this.titleA,
            links: {
              link480p: this.link480p,
              link720p: this.link720p,
              link1080p: this.link1080p
            }
          }
        ]        
      }
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    atualizar() {
      this.loading = true
      Animes.put(this.form, this.episodeoId).then(res => {
        this.showModal = false
        this.$root.$emit('Notification::show', {
          type: 'success',
          message: 'Links atualizados com sucesso!'
        })
        this.loading = false
      }).catch(err => {
        console.log(err)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
#modal-att {
  margin: 0;
  padding: 0;

  .title-type {
    margin: 0;
    margin-left: 10px;
    color: var(--featured);

    &:hover {
      cursor: pointer;
      color: var(--featured-second);
    }
  }
}
.btn-primary {
  color: var(--light) !important;
}
</style>
