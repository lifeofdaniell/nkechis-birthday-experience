<template>
  <div>
    <div class="nav-years">
      <a href="#" class="year-link active w-inline-block">
        <div>Start</div>
      </a>
      <a href="#" class="year-link w-inline-block">
        <div>Moyin</div>
      </a>
      <a href="#" class="year-link w-inline-block">
        <div>Yunuz</div>
      </a>
      <a href="#" class="year-link w-inline-block">
        <div>Victor</div>
      </a>
      <a href="#" class="year-link w-inline-block">
        <div>Temileyi</div>
      </a>
      <a href="#" class="year-link w-inline-block">
        <div>Kamlash</div>
      </a>
      <a href="#" class="year-link w-inline-block">
        <div>Olamide</div>
      </a>
      <a href="#" class="year-link w-inline-block">
        <div>Daniel</div>
      </a>
      <a href="#" class="year-link w-inline-block">
        <div>The Family</div>
      </a>
    </div>

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
        // Other options
      }"
    >
      <div class="page-wrapper">
        <HeroComponent />

        <div class="years-wrapper">
          <div class="year">
            <h1 class="large-year">
              1998
            </h1>
            <div class="year-text-container">
              <div class="year-text-wrapper">
                <h5 class="date">
                  October 1, 1998
                </h5>
                <p>Nkechinyeremkanma was born.</p>
              </div>
              <div class="image-wrapper three">
                <img
                  src="@/assets/images/IMG_6493.JPG"
                  alt=""
                  class="image"
                >
              </div>
              <div class="image-wrapper two">
                <img
                  src="@/assets/images/IMG_6493.JPG"
                  alt=""
                  class="image"
                >
              </div>
              <div class="image-wrapper one">
                <img
                  src="@/assets/images/IMG_0027.JPG"
                  alt=""
                  class="image"
                >
              </div>
            </div>
          </div>

          <div class="year">
            <h1 class="large-year">
              Moyin.
            </h1>
            <div class="year-text-container center">
              <div class="video-wrapper centered">
                <h5 class="date">
                  August, 2015
                </h5>
                <p>Nkechinyeremkanma was born.</p>
              </div>
              <div class="image-wrapper center">
                <img
                  src="@/assets/images/IMG_6493.JPG"
                  alt=""
                  class="image small"
                >
              </div>
              <div class="image-wrapper center one">
                <img
                  src="@/assets/images/IMG_6493.JPG"
                  alt=""
                  class="image small"
                >
              </div>
              <div class="image-wrapper center two">
                <img
                  src="@/assets/images/IMG_6493.JPG"
                  alt=""
                  class="image small"
                >
              </div>
              <div class="image-wrapper center three">
                <img
                  src="@/assets/images/IMG_6493.JPG"
                  alt=""
                  class="image small"
                >
              </div>
              <div class="image-wrapper center four">
                <img
                  src="@/assets/images/IMG_6493.JPG"
                  alt=""
                  class="image small"
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
                  August, 2015
                </h5>
                <p>Nkechinyeremkanma was born.</p>
              </div>
              <div class="image-wrapper center">
                <img
                  src="@/assets/images/IMG_6493.JPG"
                  alt=""
                  class="image small"
                >
              </div>
              <div class="image-wrapper center one">
                <img
                  src="@/assets/images/IMG_6493.JPG"
                  alt=""
                  class="image small"
                >
              </div>
              <div class="image-wrapper center two">
                <img
                  src="@/assets/images/IMG_6493.JPG"
                  alt=""
                  class="image small"
                >
              </div>
              <div class="image-wrapper center three">
                <img
                  src="@/assets/images/IMG_6493.JPG"
                  alt=""
                  class="image small"
                >
              </div>
              <div class="image-wrapper center four">
                <img
                  src="@/assets/images/IMG_6493.JPG"
                  alt=""
                  class="image small"
                >
              </div>
            </div>
          </div>

          <div class="year horizontal">
            <h1 class="large-year">
              Victor
            </h1>
            <div class="year-text-container horizontal">
              <div class="image-slider-wrapper">
                <div class="image-block">
                  <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" class="slide-image">
                </div>
                <div class="image-block">
                  <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" class="slide-image">
                </div>
                <div class="image-block">
                  <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" class="slide-image">
                </div>
                <div class="image-block">
                  <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" class="slide-image">
                </div>
                <div class="image-block">
                  <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" class="slide-image">
                </div>
                <div class="image-block">
                  <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" class="slide-image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocomotiveScroll>
  </div>
</template>

<script>
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
  }
}
</script>
