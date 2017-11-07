import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
// import ImageCollection from '../fixtures/images'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  startPage: '',
  thumbnail: '',
  images: [],
  selected: [],
  ogImages: [],
  changeList: []
}

const mutations = {
  SELECT (state, imgArray) {
    state.selected = imgArray
  },
  SET_STATE (state, ImageCollection) {
    state.startPage = ImageCollection.startpage
    state.thumbnail = ImageCollection.thumbnail
    state.images = ImageCollection.images
    state.ogImages = ImageCollection.images
    // state.images = [ ...ImageCollection.images ]
    // state.ogImages = [ ...ImageCollection.images ]
  },
  SAVE_STATE (state) {
    alert('state saved!')
    state.ogImages = [ ...state.images ]
    state.changeList = [...[]]
    state.selected = [...[]]
  },
  SORT_IMAGES (state, value) {
    state.images = [ ...value ]
  },
  UPDATE_CHANGES (state, changeList) {
    state.changeList = [ ...changeList ]
  },
  UPDATE_IMAGES (state, images) {
    state.images = [ ...images ]
  },
  UPDATE_STARTPAGE (state, startPage) {
    state.startPage = startPage
  },
  UPDATE_THUMBNAIL (state, thumbnail) {
    state.thumbnail = thumbnail
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  },
  loadImageCollection (context, collection) {
    axios.get('/image_collections/' + collection).then((response) => {
      context.commit('SET_STATE', response.data )
    }, (err) => {
      console.log(err)
    })
  },
  handleSelect (context, imgArray) {
    context.commit('SELECT', imgArray)
  },
  saveState (context, body) {
    console.log(body)
    axios.put('/image_collections/2', body).then((response) => {
      context.commit('SAVE_STATE', response.data )
    }, (err) => {
      console.log(err)
    })
  },
  sortImages (context, value) {
    context.commit('SORT_IMAGES', value)
  },
  updateChanges (context, changeList) {
    context.commit('UPDATE_CHANGES', changeList)
  },
  updateImages (context, images) {
    context.commit('UPDATE_IMAGES', images)
  },
  updateStartPage (context, startPage) {
    context.commit('UPDATE_STARTPAGE', startPage)
  },
  updateThumbnail (context, thumbnail) {
    context.commit('UPDATE_THUMBNAIL', thumbnail)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
