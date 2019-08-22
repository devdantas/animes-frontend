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
                <div class="form-group col-sm-12">
                  Qualidades:
                  <button @click="showVideo720p()" type="button" class="btn btn-sm btn-info ml-2">720p</button>
                  <button @click="showVideo1080p()" type="button" class="btn btn-sm btn-info ml-2">1080p</button>
                </div>
              </div>
              <div class="row">
                <div id="video-720p" class="col-sm-12">
                  <video 
                  class="embed-responsive embed-responsive-16by9"
                  poster="https://i.ibb.co/tYz106C/banner-player-720p.png" 
                  controls :src="this.link720p"
                  style="opacity: 1; width:100%;">
                  </video>
                </div>
                <div id="video-1080p" class="col-sm-12" style="display: none;">
                  <video 
                  class="embed-responsive embed-responsive-16by9"
                  poster="https://i.ibb.co/NLD2Vjq/banner-player-1080p.png" 
                  controls :src="this.link1080p"
                  style="opacity: 1;">
                  </video>
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
      showModal: false
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    showVideo720p(){
      document.getElementById("video-1080p").style.display = "none";
      document.getElementById("video-720p").style.display = "block";
    },
    showVideo1080p(){
      document.getElementById("video-1080p").style.display = "block";
      document.getElementById("video-720p").style.display = "none";
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
