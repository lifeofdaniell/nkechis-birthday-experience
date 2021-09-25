<template>
  <div>
    <Nuxt v-if="imagesLoaded" />
    <transition name="fade">
      //:css="false" @leave="leave"
      <Loader v-if="!imagesLoaded" />
    </transition>
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
  transition: opacity  2s;
  transition-delay: 1s;
}
.fade-enter, .fade-leave-to{
   opacity: 0;
}
</style>
