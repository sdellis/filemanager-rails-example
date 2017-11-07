import 'babel-polyfill'
import Vue from 'vue'
import { expect } from 'chai'
import sinon from 'sinon';
import { mount } from 'vue-test-utils'
import Vuex from 'vuex';
import App from '../../app/javascript/app.vue'
import ImageCollection from '../fixtures/vue/images'

Vue.use(Vuex)

describe('App.vue', () => {

  let actions;
  let store;

  beforeEach(() => {
    actions = {
      handleSelect: sinon.stub(),
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

  it('calls store action handleSelect when a thumbnail is clicked', () => {
    const wrapper = mount(App, { store })
    const thumb = wrapper.find('.thumbnail')
    expect(thumb.is('div')).to.equal(true)
    thumb.trigger('click')
    expect(actions.handleSelect.calledOnce).to.equal(true)
  });

  it('calls store action handleSelect when a thumbnail is shift+clicked', () => {
    const wrapper = mount(App, { store })
    const thumb1 = wrapper.findAll('.thumbnail').at(0)
    const thumb2 = wrapper.findAll('.thumbnail').at(2)
    thumb1.trigger('click')
    thumb2.trigger('click.shift')
    expect(actions.handleSelect.calledOnce).to.equal(false)
  });

})
