export const state = () => ({
  modalOpen: false,
  imagesLoaded: false,
  onDesktop: true
})

export const mutations = {
  updateModal: (state, payload) => {
    state.modalOpen = payload
  },
  updateImagesLoaded: (state, payload) => {
    state.imagesLoaded = payload
  },
  updateScreen: (state, payload) => {
    state.onDesktop = payload
  }

}
