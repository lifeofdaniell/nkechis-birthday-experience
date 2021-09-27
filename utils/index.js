const preloadImage = src =>
  new Promise((resolve, reject) => {
    const image = new Image()
    /*   const video = document.createElement('video')
    video.onload = resolve
    video.onerror = reject
    video.src = src */
    image.onload = resolve
    image.onerror = reject
    image.src = src
  })

export { preloadImage }
