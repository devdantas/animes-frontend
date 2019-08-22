<template>

  <div id="modal-att" slot="type">
    <label @click="showModal = true" class="title-type">Assistir Online</label>
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
                Assistir Online: {{this.titleA}}
              </h5> 
              <button type="button" @click="closeModal()" class="close">
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div class="modal-body">
              <div class="row">
                <div id="video-720p" class="col-sm-12">
                  <vue-plyr>
                    <video
                      poster="https://i.ibb.co/tYz106C/banner-player-720p.png"
                    >
                      <source :src="this.link720p" type="video/mp4" size="720">
                      <source :src="this.link1080p" type="video/mp4" size="1080">
                    </video>
                  </vue-plyr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  name: "layoutplayer",
  props: {
    titleA: {
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
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
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
