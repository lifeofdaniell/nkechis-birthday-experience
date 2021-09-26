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
          Moyinoluwa
        </div>
        <div class="video-container">
          <div class="video-block">
            <div class="video" />
          </div>
        </div>
        <div class="close-btn" @click="closeModal">
          Close
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import gsap from 'gsap'
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },

  computed: {
    ...mapState(['modalOpen', 'imagesLoaded'])
  },

  methods: {
    closeModal () {
      this.$store.commit('updateModal', false)
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
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 100.00%, 81.25%, 1.00);
}
.close-btn {
  cursor: pointer;
  position: absolute;
  bottom: 7vw;
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
