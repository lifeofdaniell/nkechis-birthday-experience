<template>
  <div>
    <Nuxt v-if="imagesLoaded" />
    <transition name="fade">
      //:css="false" @leave="leave"
      <Loader v-if="!imagesLoaded" />
    </transition>
    <VideoModal />
  </div>
</template>

<script>
import gsap from 'gsap/all'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['modalOpen', 'imagesLoaded'])
  },

  methods: {
    leave (el, done) {
      gsap.to(el, {
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
        onComplete: done
      })
    }
  }
}
</script>
<style>
 .fade-enter-active, .fade-leave-active {
  transition: opacity  1s;
  transition-delay: 0.5s;
}
.fade-enter, .fade-leave-to{
   opacity: 0;
}
</style>
