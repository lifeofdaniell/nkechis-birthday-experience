<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      direction: 'vertical',
      smooth: true,
      getSpeed: true,
      lerp: 0.1,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    }"
  >
    <div class="page-wrapper">
      <div class="hero">
        <div class="hero-bg">
          <div class="hero-asset-container">
            <div class="hero-asset _0">
              <div class="hero-image-wrapper">
                <img
                  src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513252/Nkechi%20Birthday/IMG_0027_efwvl7.jpg"
                  alt=""
                  class="hero-image"
                >
              </div>
            </div>
            <div class="hero-asset _1">
              <div class="hero-image-wrapper">
                <img
                  src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513258/Nkechi%20Birthday/Nkay-003_ud8yqo.jpg"
                  alt=""
                  class="hero-image"
                >
              </div>
            </div>
            <div class="hero-asset _2">
              <div class="hero-image-wrapper">
                <img
                  src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513259/Nkechi%20Birthday/Nkay-007_bpzpmy.jpg"
                  alt=""
                  class="hero-image"
                >
              </div>
            </div>
            <div class="hero-asset _3">
              <div class="hero-image-wrapper">
                <img
                  src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513262/Nkechi%20Birthday/Nkay-009_wxnkgs.jpg"
                  alt=""
                  class="hero-image"
                >
              </div>
            </div>
            <div class="hero-asset _4">
              <div class="hero-image-wrapper">
                <img
                  src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513260/Nkechi%20Birthday/Nkay-011_v13ouu.jpg"
                  alt=""
                  class="hero-image"
                >
              </div>
            </div>
            <div class="hero-asset _5">
              <div class="hero-image-wrapper">
                <img
                  src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513266/Nkechi%20Birthday/Nkay-018_rrqvrm.jpg"
                  alt=""
                  class="hero-image"
                >
              </div>
            </div>
            <div class="hero-asset _6">
              <div class="hero-image-wrapper">
                <img
                  src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513262/Nkechi%20Birthday/Nkay-010_kvnvxs.jpg"
                  alt=""
                  class="hero-image"
                >
              </div>
            </div>
            <div class="hero-asset _7">
              <div class="hero-image-wrapper">
                <img
                  src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513260/Nkechi%20Birthday/Nkay-008_eruiys.jpg"

                  alt=""
                  class="hero-image"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="hero-animation">
          <div class="hero-text-container">
            <div class="hero-text-wrapper top">
              <h1 class="hero-text">
                Celebrating
              </h1>
              <div class="intro-years">
                <div class="intro-tens">
                  <div class="intro-tens-inner">
                    <h1 class="hero-text">
                      0
                    </h1>
                    <h1 class="hero-text">
                      1
                    </h1>
                    <h1 class="hero-text">
                      2
                    </h1>
                    <h1 class="hero-text">
                      3
                    </h1>
                    <h1 class="hero-text">
                      4
                    </h1>
                    <h1 class="hero-text">
                      5
                    </h1>
                  </div>
                </div>
                <div class="intro-ones">
                  <div class="intro-ones-inner">
                    <h1 class="hero-text">
                      0
                    </h1>
                    <h1 class="hero-text">
                      1
                    </h1>
                    <h1 class="hero-text">
                      2
                    </h1>
                    <h1 class="hero-text">
                      3
                    </h1>
                    <h1 class="hero-text">
                      4
                    </h1>
                    <h1 class="hero-text">
                      5
                    </h1>
                    <h1 class="hero-text">
                      6
                    </h1>
                    <h1 class="hero-text">
                      7
                    </h1>
                    <h1 class="hero-text">
                      8
                    </h1>
                    <h1 class="hero-text">
                      9
                    </h1>
                    <h1 class="hero-text">
                      0
                    </h1>
                    <h1 class="hero-text">
                      1
                    </h1>
                    <h1 class="hero-text">
                      2
                    </h1>
                    <h1 class="hero-text">
                      3
                    </h1>
                    <h1 class="hero-text">
                      4
                    </h1>
                    <h1 class="hero-text">
                      5
                    </h1>
                    <h1 class="hero-text">
                      6
                    </h1>
                    <h1 class="hero-text">
                      7
                    </h1>
                    <h1 class="hero-text">
                      8
                    </h1>
                    <h1 class="hero-text">
                      9
                    </h1>
                  </div>
                </div>
              </div>
              <h1 class="hero-text">
                Years
              </h1>
            </div>
          </div>
          <div class="hero-text-container bottom">
            <div class="hero-text-wrapper bottom">
              <h1 class="hero-text">
                With Nkechi Okochi.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="years-wrapper">
        <!--   <div class="nav-years" data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
            <a href="#" class="year-link w-inline-block">
              <div>Moyin</div>
            </a>
            <a href="#" class="year-link w-inline-block">
              <div>Victor</div>
            </a>
            <a href="#" class="year-link w-inline-block">
              <div>Yunuz</div>
            </a>
            <a href="#" class="year-link w-inline-block">
              <div>Kamlash</div>
            </a>
            <a href="#" class="year-link w-inline-block">
              <div>Olamide</div>
            </a>
            <a href="#" class="year-link w-inline-block">
              <div>Moonface</div>
            </a>
            <a href="#" class="year-link w-inline-block">
              <div>The Family</div>
            </a>
          </div> -->
        <div class="year prefix">
          <div class="year-text-container">
            <div class="year-text-wrapper">
              <h5 class="date ps">
                October 1
              </h5>
              <p class="pretext header">
                Nkechinyeremkanma! You&#x27;re <strong>23</strong> years today!
                To celebrate you, we both how much of an impact you&#x27;ve had
                on me as a person, but do you know how much impact you&#x27;ve
                had on others and how much they appreciate you? This is a
                reminder. 🖤
              </p>
              <p class="pretext ps">
                <em>PS. I had a blast creating this!</em>
              </p>
            </div>
          </div>
        </div>

        <div class="year">
          <h1 class="large-year">
            Moyin
          </h1>
          <div class="year-text-container center">
            <div class="video-wrapper centered">
              <h5 class="date">
                Moyinoluwa
              </h5>
              <h1 class="birthday-header">
                &quot;You&#x27;re such an amazing person!&quot;
              </h1>
              <p class="birthday-subtext">
                &#x27;Thank you for all the beautiful years of friendship&#x27;
              </p>
              <div class="open-button" @click="openModal">
                See Moyin&#x27;s birthday wish video
              </div>
            </div>
            <div class="image-wrapper bottom-left moyin parallax">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513256/Nkechi%20Birthday/Moyin_x_Nkay-004_e37udp.jpg"
                alt=""
                class="image mid"
              >
            </div>
            <div class="image-wrapper top-right moyin parallax">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513256/Nkechi%20Birthday/Moyin_x_Nkay-001_drlt8v.jpg"
                alt=""
                class="image mid"
              >
            </div>
            <div class="image-wrapper center-right moyin parallax">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513255/Nkechi%20Birthday/Moyin_x_Nkay-003_aulmxc.jpg"
                alt=""
                class="image mid"
              >
            </div>
            <div class="image-wrapper top-left moyin parallax">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513257/Nkechi%20Birthday/Moyin_x_Nkay-002_mdlkqb.jpg"
                alt=""
                class="image mid"
              >
            </div>
          </div>
        </div>

        <div class="year horizontal">
          <h1 class="large-year">
            Victor
          </h1>
          <div class="year-text-container center stack">
            <div class="video-wrapper centered">
              <h5 class="date">
                Victor
              </h5>
              <h1 class="birthday-header">
                &quot;It&#x27;s no news that i love you so much&quot;
              </h1>
              <p class="birthday-subtext">
                &#x27;Wish you loads of fun&#x27;
              </p>
              <a href="#">See Victor&#x27;s birthday wish video</a>
            </div>
            <div class="image-wrapper victor top-left stack">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513270/Nkechi%20Birthday/Victor_x_Nkay-011_kg3sfw.jpg"
                alt=""
                class="image stack"
              >
            </div>
            <div class="image-wrapper victor top-center-left stack">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513267/Nkechi%20Birthday/Victor_x_Nkay-006_jyhusv.jpg"
                alt=""
                class="image stack"
              >
            </div>
            <div class="image-wrapper victor top-center-right stack">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513269/Nkechi%20Birthday/Victor_x_Nkay-010_vfnm58.jpg"
                alt=""
                class="image stack"
              >
            </div>
            <div class="image-wrapper victor top-right stack">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513268/Nkechi%20Birthday/Victor_x_Nkay-012_ppet2n.jpg"
                alt=""
                class="image stack"
              >
            </div>
            <div class="image-wrapper victor bottom-left stack">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513267/Nkechi%20Birthday/Victor_x_Nkay-007_losvlf.jpg"
                alt=""
                class="image stack"
              >
            </div>
            <div class="image-wrapper victor bottom-center stack">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513265/Nkechi%20Birthday/Victor_x_Nkay-005_vk4aud.jpg"
                alt=""
                class="image stack"
              >
            </div>
            <div class="image-wrapper victor bottom-right stack">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513265/Nkechi%20Birthday/Victor_x_Nkay-001_nvl2ip.jpg"
                alt=""
                class="image stack"
              >
            </div>
          </div>
        </div>

        <div class="year">
          <h1 class="large-year">
            Yunuz
          </h1>
          <div class="year-text-container center">
            <div class="video-wrapper centered">
              <h5 class="date">
                Yunuz
              </h5>
              <h1 class="birthday-header">
                &quot;You&#x27;re a star!&quot;
              </h1>
              <p class="birthday-subtext">
                &#x27;My friieennnnddddddddd&#x27;
              </p>
              <a href="#">See Yunuz&#x27;s birthday wish video</a>
            </div>
            <div class="image-wrapper top-left yunuz parallax">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513270/Nkechi%20Birthday/Yunuz_x_Nkay-003_gmxmqk.jpg"
                alt=""
                class="image mid"
              >
            </div>
            <div class="image-wrapper top-right yunuz parallax">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513270/Nkechi%20Birthday/Yunuz_x_Nkay-002_u2ydlw.jpg"
                alt=""
                class="image mid"
              >
            </div>
            <div class="image-wrapper bottom-left yunuz parallax">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513270/Nkechi%20Birthday/Yunuz_x_Nkay-005_to7xdf.jpg"
                alt=""
                class="image mid"
              >
            </div>
            <div class="image-wrapper center-right yunuz parallax">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513270/Nkechi%20Birthday/Yunuz_x_Nkay-001_oamllq.jpg"
                alt=""
                class="image mid"
              >
            </div>
          </div>
        </div>

        <div class="year">
          <h1 class="large-year kamlash">
            Kamlash
          </h1>
          <div class="year-text-container center stack">
            <div class="video-wrapper centered">
              <h5 class="date">
                Kamlash
              </h5>
              <h1 class="birthday-header">
                &quot;You&#x27;ve been nothing but great!&quot;
              </h1>
              <p class="birthday-subtext">
                &#x27;I&#x27;m happy to celebrate you every year&#x27;
              </p>
              <a href="#">See Kamlash&#x27;s birthday wish video</a>
            </div>
            <div class="image-wrapper kamlash top-left stack">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513252/Nkechi%20Birthday/Kemi_x_Nkay-003_o3jadm.jpg"
                alt=""
                class="image stack"
              >
            </div>
            <div class="image-wrapper kamlash top-center stack">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513252/Nkechi%20Birthday/Kemi_x_Nkay-005_ifz0i6.jpg"
                alt=""
                class="image stack"
              >
            </div>
            <div class="image-wrapper kamlash top-right stack">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513255/Nkechi%20Birthday/Kemi_x_Nkay-008_rxqdap.jpg"
                alt=""
                class="image stack"
              >
            </div>
            <div class="image-wrapper kamlash rotate-center stack">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513252/Nkechi%20Birthday/Kemi_x_Nkay-002_zsor8v.jpg"
                alt=""
                class="image stack"
              >
            </div>
            <div class="image-wrapper kamlash bottom-right stack">
              <img
                src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513254/Nkechi%20Birthday/Kemi_x_Nkay-009_awf3ia.jpg"
                alt=""
                class="image stack"
              >
            </div>
          </div>
        </div>

        <div class="year horizontal">
          <h1 class="large-year olamide">
            Olamide
          </h1>
          <div class="year-text-container center">
            <div class="video-wrapper centered">
              <h5 class="date">
                Olamide
              </h5>
              <h1 class="birthday-header">
                &quot;Love you babe!&quot;
              </h1>
              <p class="birthday-subtext">
                &#x27;Kisses!&#x27;
              </p>
              <a href="#">See Olamide&#x27;s birthday wish video</a>
            </div>
          </div>
        </div>

        <div class="year">
          <h1 class="large-year moonface">
            Moonface
          </h1>
          <div class="year-text-container center">
            <div class="video-wrapper centered">
              <h5 class="date">
                Moonface
              </h5>
              <h1 class="birthday-header">
                &quot;Love you babe!&quot;
              </h1>
              <p class="birthday-subtext">
                &#x27;Kisses!&#x27;
              </p>
              <a href="#">See Moonface&#x27;s birthday wish video</a>
            </div>
          </div>
        </div>

        <div class="year">
          <h1 class="large-year family">
            The Family
          </h1>
          <div class="year-text-container center">
            <div class="video-wrapper centered">
              <h5 class="date">
                The Family
              </h5>
              <h1 class="birthday-header">
                &quot;Love you babe!&quot;
              </h1>
              <p class="birthday-subtext">
                &#x27;Kisses!&#x27;
              </p>
              <a href="#">See your family&#x27;s birthday wish video</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LocomotiveScroll>
</template>

<script>
import gsap, { Quart } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quint } from 'gsap/src/all'
gsap.registerPlugin(ScrollTrigger)

export default {
  head () {
    return {
      bodyAttrs: {
        class: 'body'
      },
      htmlAttrs: {
        lang: 'en',
        'data-wf-page': '60f31f4bb1246a04f940673a',
        'data-wf-site': '60f31f4bb1246a7451406739'
      },
      title: 'Nkechi Okochi',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          name: 'theme-color',
          property: 'theme-color',
          content: '#00000'
        },
        {
          name: 'apple-mobile-web-app-title',
          property: 'apple-mobile-web-app-title',
          content: ''
        },
        {
          name: 'og:title',
          property: 'og:title',
          content: ''
        },
        {
          name: 'og:description',
          property: 'og:description',
          content: ''
        },
        {
          name: 'og:site_name',
          property: 'og:site_name',
          content: ''
        },
        {
          name: 'twitter:title',
          property: 'twitter:title',
          content: ''
        },
        {
          name: 'twitter:site_name',
          property: 'og:site_name',
          content: ''
        },
        {
          name: 'twitter:description',
          property: 'twitter:description',
          content: ''
        }
      ]
    }
  },

  mounted () {
    this.initScrolltrigger()
    this.heroAnimation()
    // this.navAnimation()
    this.prefixAnimation()
    this.nameAnimation()
    this.imageParallax()
    this.stackAnimation()
    this.$nuxt.$emit('update-locomotive')
  },

  methods: {
    openModal () {
      this.$store.commit('updateModal', true)
    },

    initScrolltrigger () {
      const locomotive = this.$refs.scroller.locomotive
      locomotive.on('scroll', ScrollTrigger.update)
      ScrollTrigger.scrollerProxy(locomotive.el, {
        scrollTop (value) {
          return arguments.length
            ? locomotive.scrollTo(value, 0, 0)
            : locomotive.scroll.instance.scroll.y
        },
        getBoundingClientRect () {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        }
      })
    },

    heroAnimation () {
      const tl = gsap.timeline({
        paused: true
      })
      tl.from('.hero-text-wrapper.top', { yPercent: 120, ease: Quart.easeOut, duration: 1 })
      tl.to('.intro-ones-inner', { yPercent: -65, ease: Quint.easeOut, duration: 2.5 })
      tl.to('.intro-tens-inner', { yPercent: -33, ease: Quart.easeOut, duration: 1.5 }, '<+=0.5')
      tl.from('.hero-text-container.bottom', { height: 0, ease: Quint.easeInOut, duration: 1 }, '<+=0.1')
      tl.from('.hero-text-wrapper.bottom', { yPercent: 120, ease: Quart.easeOut, duration: 1.5 }, '<+0.4')

      gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
          scroller: this.$refs.scroller.locomotive.el,
          start: 'top top',
          end: +2500,
          // snap: 0.05,
          pin: true,
          scrub: true,
          onLeave: () => { tl.play() }
        }
      })
        .to('.hero-asset._7', { yPercent: -200, rotateZ: -100 }, '>')
        .to('.hero-asset._6', { yPercent: -200, rotateZ: -110 }, '>')
        .to('.hero-asset._5', { yPercent: -200, rotateZ: -130 }, '>')
        .to('.hero-asset._4', { yPercent: -200, rotateZ: -140 }, '>')
        .to('.hero-asset._3', { yPercent: -200, rotateZ: -120 }, '>')
        .to('.hero-asset._2', { yPercent: -200, rotateZ: -120 }, '>')
        .to('.hero-asset._1', { yPercent: -200, rotateZ: -110 }, '>')
        .to('.hero-asset._0', { yPercent: -200, rotateZ: -130 }, '>')
    },

    prefixAnimation () {
      const preTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.year.prefix',
          scroller: this.$refs.scroller.locomotive.el,
          start: 'top 30%'
        }
      })
      preTl.from('.date.ps', { opacity: 0, overflow: 'hidden' })
      preTl.from('.pretext.header', { opacity: 0, overflow: 'hidden' }, '>')
      preTl.from('.pretext.ps', { opacity: 0, overflow: 'hidden' }, '>')
    },

    navAnimation () {
      const navTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.year.first',
          start: 'top top'
        }
      })
      navTl.from('.nav-years', { opacity: 0 })
    },

    nameAnimation () {
      gsap.utils.toArray('.large-year').forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top 50%',
            scrub: true
          },
          x: -450,
          ease: 'none'
        })
      })
    },

    imageParallax () {
      gsap.utils.toArray('.image-wrapper.bottom-left.parallax').forEach((btmLeftImg) => {
        gsap.to(btmLeftImg, {
          scrollTrigger: {
            trigger: btmLeftImg.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top 50%',
            scrub: true
          },
          y: -150,
          scale: 0.95
        })
      })
      gsap.utils.toArray('.image-wrapper.top-right.parallax').forEach((topRightImg) => {
        gsap.to(topRightImg, {
          scrollTrigger: {
            trigger: topRightImg.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top 50%',
            scrub: true
          },
          y: -20
        })
      })
      gsap.utils.toArray('.image-wrapper.top-left.parallax').forEach((topLeftImg) => {
        gsap.to(topLeftImg, {
          scrollTrigger: {
            trigger: topLeftImg.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top 50%',
            scrub: true
          },
          y: -70
        })
      })
      gsap.utils.toArray('.image-wrapper.center-right.parallax').forEach((centerRightImg) => {
        gsap.to(centerRightImg, {
          scrollTrigger: {
            trigger: centerRightImg.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top 50%',
            scrub: true
          },
          y: -120
        })
      })
    },

    stackAnimation () {
      gsap.utils.toArray('.image-wrapper.top-left.stack').forEach((topLeftStackImg) => {
        gsap.to(topLeftStackImg, {
          scrollTrigger: {
            trigger: topLeftStackImg.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top top',
            pin: true,
            scrub: true
          },
          rotationZ: 0,
          scale: 0.75,
          y: -220,
          x: -500
        })
      })
      gsap.utils.toArray('.image-wrapper.top-center-left.stack').forEach((topCenterStackImg) => {
        gsap.to(topCenterStackImg, {
          scrollTrigger: {
            trigger: topCenterStackImg.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top top',
            // pin: true,
            scrub: true
          },
          rotationZ: 0,
          scale: 0.75,
          y: -250,
          x: -120
        })
      })
      gsap.utils.toArray('.image-wrapper.top-center-right.stack').forEach((topCenterRStackImg) => {
        gsap.to(topCenterRStackImg, {
          scrollTrigger: {
            trigger: topCenterRStackImg.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top top',
            // pin: true,
            scrub: true
          },
          rotationZ: 0,
          scale: 0.75,
          y: -230,
          x: 200
        })
      })
      gsap.utils.toArray('.image-wrapper.top-right.stack').forEach((topRightStackImg) => {
        gsap.to(topRightStackImg, {
          scrollTrigger: {
            trigger: topRightStackImg.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top top',
            // pin: true,
            scrub: true
          },
          rotationZ: 0,
          scale: 0.75,
          y: -220,
          x: 500
        })
      })
      gsap.utils.toArray('.image-wrapper.bottom-left.stack').forEach((bottomLeftStackImg) => {
        gsap.to(bottomLeftStackImg, {
          scrollTrigger: {
            trigger: bottomLeftStackImg.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top top',
            // pin: true,
            scrub: true
          },
          rotationZ: 0,
          scale: 0.75,
          y: 160,
          x: -400
        })
      })
      gsap.utils.toArray('.image-wrapper.bottom-center.stack').forEach((bottomCenterStackImg) => {
        gsap.to(bottomCenterStackImg, {
          scrollTrigger: {
            trigger: bottomCenterStackImg.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top top',
            // pin: true,
            scrub: true
          },
          rotationZ: 0,
          scale: 0.65,
          y: 245,
          x: 0
        })
      })
      gsap.utils.toArray('.image-wrapper.bottom-right.stack').forEach((bottomRightStackImg) => {
        gsap.to(bottomRightStackImg, {
          scrollTrigger: {
            trigger: bottomRightStackImg.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top top',
            // pin: true,
            scrub: true
          },
          rotationZ: 0,
          scale: 0.75,
          y: 160,
          x: 400
        })
      })
      // Kamlash Section
      gsap.utils.toArray('.image-wrapper.top-center.stack').forEach((ktopCenterRStackImg) => {
        gsap.to(ktopCenterRStackImg, {
          scrollTrigger: {
            trigger: ktopCenterRStackImg.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top top',
            // pin: true,
            scrub: true
          },
          rotationZ: 0,
          scale: 0.75,
          y: -240,
          x: 0
        })
      })
      gsap.utils.toArray('.image-wrapper.rotate-center.stack').forEach((kbottomCenterStackImg) => {
        gsap.to(kbottomCenterStackImg, {
          scrollTrigger: {
            trigger: kbottomCenterStackImg.parentElement,
            scroller: this.$refs.scroller.locomotive.el,
            start: 'top top',
            // pin: true,
            scrub: true
          },
          rotationZ: -90,
          scale: 0.75,
          y: 160,
          x: -400
        })
      })
    }
  }
}

</script>

<style>
.hero {
  z-index: 20;
}
.video-wrapper > a {
  text-decoration: underline;
}
.image-wrapper.victor.top-center-left {
  margin-left: -14%;
  -webkit-transform: rotate(3deg);
  -ms-transform: rotate(3deg);
  transform: rotate(3deg);
}
.image-wrapper.victor.top-center-right {
  margin-left: -10%;
  -webkit-transform: rotate(9deg) rotate(3deg);
  -ms-transform: rotate(9deg) rotate(3deg);
  transform: rotate(9deg) rotate(3deg);
}
.image-wrapper.kamlash.rotate-center {
  margin-left: -15%;
  -webkit-transform: rotate(-11deg);
  -ms-transform: rotate(-11deg);
  transform: rotate(-11deg);
}
.open-button{
  text-decoration: underline;
  cursor: pointer;
}
</style>
