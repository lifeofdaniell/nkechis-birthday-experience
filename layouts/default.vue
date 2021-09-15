<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head () {
    return {
      bodyAttrs: {
        class: 'body'
      }
    }
  },
  mounted () {
    /* this.$nextTick(function () {
      this.$initWebflow()
    }) */
  }
}
</script>
