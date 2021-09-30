<template>
  <div>
    <Nuxt v-if="imagesLoaded && onDesktop" />
    <transition name="fade">
      <Loader v-if="!imagesLoaded && onDesktop" />
    </transition>
    <div v-if="!onDesktop" class="message">
      You're too special for this to be seen on mobile.<br>Please view on your computer
    </div>
  </div>
</template>

<script>
import gsap from 'gsap/all'
import { mapState } from 'vuex'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  data () {
    return {
    }
  },

  beforeMount () {
    this.checkScreen()
  },

  mounted () {
    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 1030px)').matches) {
        this.$store.commit('updateScreen', false)
        ScrollTrigger.disable()
      } else {
        this.$store.commit('updateScreen', true)
        ScrollTrigger.enable()
      }
    })
  },

  computed: {
    ...mapState(['modalOpen', 'imagesLoaded', 'onDesktop'])
  },

  methods: {
    leave (el, done) {
      gsap.to(el, {
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
        onComplete: done
      })
    },
    checkScreen () {
      if (window.matchMedia('(max-width: 1030px)').matches) {
        this.$store.commit('updateScreen', false)
      } else {
        this.$store.commit('updateScreen', true)
      }
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
.message{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
</style>
