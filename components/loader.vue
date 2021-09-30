<template>
  <div ref="loader" class="loader-wrapper">
    <div class="loader-bg" />
    <div class="hero-asset _7 loading">
      <div class="hero-image-wrapper">
        <img
          src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1633011770/Nkechi%20Birthday/nkaywebsite_t53tv0.jpg"
          loading="lazy"
          alt=""
          class="hero-image"
        >
      </div>
    </div>
    <div class="loader-text">
      2021
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { preloadImage } from '~/utils/index.js'

export default {
  data () {
    return {
      toBePreloaded: [
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1633011770/Nkechi%20Birthday/nkaywebsite_t53tv0.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632754811/Nkechi%20Birthday/YoungNkay-002_fb3bil.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632754809/Nkechi%20Birthday/YoungNkay-001_tn4qfr.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632754809/Nkechi%20Birthday/YoungNkay-00_nfytga.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632754814/Nkechi%20Birthday/YoungNkay-004_kosn4a.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632754811/Nkechi%20Birthday/YoungNkay-003_amf5kq.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632754814/Nkechi%20Birthday/YoungNkay-005_mlzy6y.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632754814/Nkechi%20Birthday/YoungNkay-006_ienqwc.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632998997/Nkechi%20Birthday/YoungNkay8_wyudsn.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632754808/Nkechi%20Birthday/Temileyi_x_Nkay-007_pwtcfp.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632754807/Nkechi%20Birthday/Temileyi_x_Nkay-006_ly7o7q.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632754806/Nkechi%20Birthday/Temileyi_x_Nkay-005_ffl5mu.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632754806/Nkechi%20Birthday/Temileyi_x_Nkay-004_auav58.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632754806/Nkechi%20Birthday/Temileyi_x_Nkay-003_segbo3.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632775159/Nkechi%20Birthday/Temileyi_x_Nkay-002_lkbtbr.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632754806/Nkechi%20Birthday/Temileyi_x_Nkay-001_vak0v3.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513270/Nkechi%20Birthday/Yunuz_x_Nkay-005_to7xdf.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513270/Nkechi%20Birthday/Yunuz_x_Nkay-002_u2ydlw.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513270/Nkechi%20Birthday/Yunuz_x_Nkay-003_gmxmqk.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513270/Nkechi%20Birthday/Victor_x_Nkay-011_kg3sfw.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513270/Nkechi%20Birthday/Yunuz_x_Nkay-001_oamllq.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513269/Nkechi%20Birthday/Victor_x_Nkay-010_vfnm58.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513269/Nkechi%20Birthday/Victor_x_Nkay-009_e8kkrz.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513268/Nkechi%20Birthday/Victor_x_Nkay-012_ppet2n.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513267/Nkechi%20Birthday/Victor_x_Nkay-006_jyhusv.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513267/Nkechi%20Birthday/Victor_x_Nkay-007_losvlf.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513267/Nkechi%20Birthday/Victor_x_Nkay-008_rsvl0y.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513266/Nkechi%20Birthday/Victor_x_Nkay-004_fzw09e.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513266/Nkechi%20Birthday/Nkay-018_rrqvrm.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513266/Nkechi%20Birthday/Victor_x_Nkay-002_erbp9r.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513265/Nkechi%20Birthday/Victor_x_Nkay-005_vk4aud.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513265/Nkechi%20Birthday/Victor_x_Nkay-001_nvl2ip.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513264/Nkechi%20Birthday/Victor_x_Nkay-003_chty40.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513264/Nkechi%20Birthday/Nkay-016_fvbavv.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513263/Nkechi%20Birthday/Nkay-014_ea8vfz.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513262/Nkechi%20Birthday/Nkay-017_puisig.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513262/Nkechi%20Birthday/Nkay-015_o4pb1z.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513262/Nkechi%20Birthday/Nkay-012_rvqbxq.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513262/Nkechi%20Birthday/Nkay-010_kvnvxs.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513262/Nkechi%20Birthday/Nkay-009_wxnkgs.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513261/Nkechi%20Birthday/Nkay-013_og6vnk.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513260/Nkechi%20Birthday/Nkay-008_eruiys.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513260/Nkechi%20Birthday/Nkay-011_v13ouu.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513259/Nkechi%20Birthday/Nkay-007_bpzpmy.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513258/Nkechi%20Birthday/Nkay-005_i8xjff.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513258/Nkechi%20Birthday/Nkay-006_jdtzkt.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513258/Nkechi%20Birthday/Nkay-002_cldlhq.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513258/Nkechi%20Birthday/Nkay-004_w0gnzo.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513258/Nkechi%20Birthday/Nkay-003_ud8yqo.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513257/Nkechi%20Birthday/Moyin_x_Nkay-002_mdlkqb.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513256/Nkechi%20Birthday/Nkay-001_vxt8ht.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513256/Nkechi%20Birthday/Moyin_x_Nkay-004_e37udp.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513256/Nkechi%20Birthday/Moyin_x_Nkay-001_drlt8v.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513255/Nkechi%20Birthday/Moyin_x_Nkay-003_aulmxc.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513255/Nkechi%20Birthday/Kemi_x_Nkay-006_aqp69m.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513255/Nkechi%20Birthday/Kemi_x_Nkay-008_rxqdap.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513254/Nkechi%20Birthday/Kemi_x_Nkay-009_awf3ia.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513253/Nkechi%20Birthday/Kemi_x_Nkay-007_x5w96l.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513252/Nkechi%20Birthday/Kemi_x_Nkay-003_o3jadm.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513252/Nkechi%20Birthday/Kemi_x_Nkay-002_zsor8v.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513252/Nkechi%20Birthday/Kemi_x_Nkay-005_ifz0i6.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513252/Nkechi%20Birthday/IMG_0027_efwvl7.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513251/Nkechi%20Birthday/Kemi_x_Nkay-004_hxm7qn.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513250/Nkechi%20Birthday/Daniel_x_Nkay-009_yg25nl.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513250/Nkechi%20Birthday/Daniel_x_Nkay-019_dlt4i4.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513249/Nkechi%20Birthday/Daniel_x_Nkay-017_cpyqoi.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513249/Nkechi%20Birthday/Kemi_x_Nkay-001_gnb7et.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513249/Nkechi%20Birthday/Daniel_x_Nkay-016_gf8h4o.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513247/Nkechi%20Birthday/Daniel_x_Nkay-014_xwpzxx.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513248/Nkechi%20Birthday/Daniel_x_Nkay-010_k1wmgn.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513247/Nkechi%20Birthday/Daniel_x_Nkay-018_wgt7mt.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513247/Nkechi%20Birthday/Daniel_x_Nkay-015_bpe6ou.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513246/Nkechi%20Birthday/Daniel_x_Nkay-013_yui79r.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513245/Nkechi%20Birthday/Daniel_x_Nkay-011_c0xfbx.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513246/Nkechi%20Birthday/Daniel_x_Nkay-007_ku1ior.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513245/Nkechi%20Birthday/Daniel_x_Nkay-008_xk3g3s.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513244/Nkechi%20Birthday/Daniel_x_Nkay-012_yoblu9.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513243/Nkechi%20Birthday/Daniel_x_Nkay-005_kf5kof.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513243/Nkechi%20Birthday/Daniel_x_Nkay-002_h6o6cl.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513243/Nkechi%20Birthday/Daniel_x_Nkay-006_ijtjin.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513242/Nkechi%20Birthday/Daniel_x_Nkay-003_glbkhc.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513242/Nkechi%20Birthday/Daniel_x_Nkay-001_qbcmye.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632513242/Nkechi%20Birthday/Daniel_x_Nkay-004_d6lzmq.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632999905/Nkechi%20Birthday/IMG_3964_df2ifq.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632999900/Nkechi%20Birthday/IMG_1172_rgj7cd.jpg',
        'https://res.cloudinary.com/areoladaniel-com/image/upload/v1632999897/Nkechi%20Birthday/3edf4f58-7d00-4e87-8797-dae8d340893a_pgsmio.jpg'
      ]
    }
  },

  mounted () {
    const loader = this.$refs.loader
    this.preload()

    loader.style.height = `${window.innerHeight}px`
    loader.style.overflow = 'hidden'

    window.addEventListener('resize', () => {
      loader.style.height = `${window.innerHeight}px`
    })
  },

  methods: {
    async preload () {
      await Promise.all(
        this.toBePreloaded.map(async (image) => {
          await preloadImage(image)
        }),
        gsap.to('.hero-asset._7.loading', {
          onComplete: () => {
            const tl = gsap.timeline({
              onComplete: () => {
                this.$store.commit('updateImagesLoaded', true)
              }
            })
            tl.to('.loader-text', {
              opacity: 1,
              duration: 1
            })
            tl.from('.loader-text', {
              duration: 2,
              ease: 'none',
              innerText: 1998,
              roundProps: 'innerText',
              onUpdate: () => {
                const element = document.querySelector('.loader-text')
                const val = gsap.getProperty(element, 'innerText')
                element.innerText = val
              }
            }, '<1')
            tl.to('.hero-asset._7.loading', {
              opacity: 1
            }, '>')
            tl.to('.hero-asset._7.loading', {
              translateY: 0,
              duration: 1.5,
              rotateZ: -11
            })
            tl.to('.loader-bg', {
              duration: 1,
              ease: 'power2.out',
              yPercent: -100
            }, '>')
          }
        })
      )
    }
  }
}
</script>

<style>
.loader-text{
  opacity: 0;
  letter-spacing: -5px;
  z-index: 2;
}
.hero-asset._7.loading{
  z-index: 3;
}
.loader-bg{
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100vh;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  font-size: 300px;
  line-height: 1em;
  font-weight: 300;
  letter-spacing: 50px;
}

</style>
