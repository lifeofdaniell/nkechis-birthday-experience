<template>
  <transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
  >
    <div v-if="modalOpen" class="video-modal">
      <div class="video-modal-wrapper">
        <div class="name">
          {{ name }}
        </div>
        <div class="video-container">
          <div class="video-block">
            <div class="video">
              <video id="birthday-video" width="100%" height="100%">
                <source
                  :src="src"
                  type="video/mp4"
                >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div class="controls">
          <div class="play" :class="[isPlaying ? 'active' : '' ]" @click="playVideo" />
          <div class="close-btn" @click="closeModal">
            Close
          </div>
          <div class="pause" :class="[isPlaying ? '' : 'active' ]" @click="pauseVideo" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import gsap from 'gsap'
import { mapState } from 'vuex'
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      isPlaying: false
    }
  },

  computed: {
    ...mapState(['modalOpen', 'imagesLoaded'])
  },

  methods: {
    closeModal () {
      this.$store.commit('updateModal', false)
      this.isPlaying = false
    },

    beforeEnter (el) {
      gsap.set(el, {
        yPercent: 100
      })
    },

    enter (el, done) {
      const timeline = gsap.timeline({
        onComplete () {
          done()
        }
      })
      timeline
        .to(el, {
          yPercent: 0,
          duration: 0.8,
          ease: 'power2.inOut'
        })
        // .set(el, { top: 0 })
        .from('.video-modal-wrapper', {
          opacity: 0
        })
    },

    beforeLeave (el) {
      gsap.set(el, {
        yPercent: 0,
        bottom: 'unset'
      })
    },

    leave (el, done) {
      const timeline = gsap.timeline({
        onComplete: done
      })
      timeline
        .to('.video-modal-wrapper', {
          opacity: 0
        })
        .to(el, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power2.inOut'
        })
    },

    playVideo () {
      const video = document.querySelector('#birthday-video')
      if (this.isPlaying === false) {
        video.play()
        this.isPlaying = true
      }
    },

    pauseVideo () {
      const video = document.querySelector('#birthday-video')
      if (this.isPlaying === true) {
        video.pause()
        this.isPlaying = false
      }
    }
  }
}
</script>

<style>
.video-modal {
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 100;
  display: flex;
  width: 100%;
  height: 100vh;
  padding-right: 20vw;
  padding-bottom: 5vw;
  padding-left: 20vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0.00%, 100.00%, 1.00);
}
.video-modal-wrapper{
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.name {
  margin-bottom: 25px;
}
.video-container {
  position: relative;
  width: 600px;
}
.video-block {
  position: relative;
  width: 100%;
  height: 0px;
  padding-top: 70.72%;
}
.video {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  width: 100%;
  height: 100%;
  background-color: black;
}
.video > video {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 12;
  width: 100%;
  height: 100%;
}
.controls {
  position: absolute;
  bottom: 7vw;
  display: flex;
  width: 600px;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: space-between;
  align-items: center;
}

.play {
  width: 45px;
  height: 42px;
  background-image: url('@/assets/images/play.svg');
  background-position: 50% 50%;
  background-size: 50%;
  background-repeat: no-repeat;
  cursor: pointer;
}
.pause {
  width: 45px;
  height: 42px;
  background-image: url('@/assets/images/pause.svg');
  background-position: 50% 50%;
  background-size: 50%;
  background-repeat: no-repeat;
  cursor: pointer;
}
.pause.active,
.play.active {
  opacity: 0.3;
  cursor: not-allowed;
}

.close-btn {
  cursor: pointer;
  display: flex;
  min-width: 100px;
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
  justify-content: center;
  align-items: center;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: black;
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: black;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: black;
  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: black;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: hsla(0, 0.00%, 0.00%, 1.00);
  color: hsla(216, 0.00%, 100.00%, 1.00);
  text-transform: uppercase;
}
</style>
