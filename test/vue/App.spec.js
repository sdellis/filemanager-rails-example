import 'babel-polyfill'
import Vue from 'vue'
import { expect } from 'chai'
import sinon from 'sinon';
import { mount } from 'avoriaz'
import Vuex from 'vuex';
import App from '../../app/javascript/app.vue'
import ImageCollection from '../fixtures/vue/images'

Vue.use(Vuex)

describe('App.vue', () => {

  let actions;
  let store;

  beforeEach(() => {
    actions = {
      actionClick: sinon.stub(),
      actionInput: sinon.stub(),
    };
    store = new Vuex.Store({
      state: {
        startPage: ImageCollection.startPage,
        thumbnail: ImageCollection.thumbnail,
        images: ImageCollection.images,
        selected: [],
        ogImages: ImageCollection.images,
        changeList: []
      },
      actions,
    });
  });

  it('has a root element with class filemanager', () => {
    const wrapper = mount(App, { store })
    expect(wrapper.is('#filemanager')).to.equal(true)
  })
})
