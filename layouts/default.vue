<template>
  <div>
    <Nuxt v-if="imagesLoaded" />
    <transition name="fade">
      <Loader v-if="!imagesLoaded" />
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap/all'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      /*  friends: [
        {
          name: 'Moyinoluwa',
          video_url: 'https://res.cloudinary.com/areoladaniel-com/video/upload/v1632697193/Nkechi%20Birthday/Moyin_x_Nkay_ldku7r.mp4'
        },
        {
          name: 'Yunuz',
          video_url: 'https://res.cloudinary.com/areoladaniel-com/video/upload/v1632697188/Nkechi%20Birthday/Yunuz_x_Nkay_n2uikv.mp4'
        }
      ] */
    }
  },

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
