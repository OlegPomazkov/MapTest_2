import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../utils/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	allPoints: [],
    pointDescs: []
  },

  getters: {
  	points: (state) => {
    	return state.allPoints.map( i => Object.assign({}, i))
    },
    pointDescriptions: (state) => {
      return state.pointDescs.map( i => Object.assign({}, i))
    },
    pointDescriptionById: (state) => (id) => {
      const commonData = state.allPoints.filter(i => i.id === id)[0] || {}
      const descDada = state.pointDescs.filter(i => i.id === id)[0] || {}

      return Object.assign(commonData, descDada)
    },
  },
  
  mutations: {
  	SET_ALL_POINTS (state, arr) {
	    state.allPoints = arr
	  },
    SET_DESCRIPTION (state, obj) {
      state.pointDescs.push(obj)
    },
  },

  actions: {
    async getAllPoints({dispatch, commit}) {
      try {
        const list = await axios.get('list')

        commit('SET_ALL_POINTS', list.data)

      } catch(err) {
        console.error(err)
      }

    },
    async setCurrentPoint({dispatch, commit, state}, id) {
      if(state.pointDescs.filter( i => i.id === id).length) return

      try {
        const pointData =  await axios.get(`description/${id}`)

        commit('SET_DESCRIPTION', pointData.data)
      } catch(err) {
        console.error(err)
      }
    },
    async getAllData({dispatch, commit, state}){
      if (state.allPoints.length>0 && state.allPoints.length===state.pointDescs.length) return

      try {
        if (state.allPoints.length === 0) {
          await dispatch('getAllPoints')
        }
        const promiseArr = []

        state.allPoints.forEach( point => {
          let isIn = state.pointDescs.filter(i => i.id===point.id).length

          if( !isIn ) promiseArr.push(dispatch('setCurrentPoint', point.id))
        })
        await Promise.all(promiseArr)
      } catch(err) {
        console.error(err)
      }
    }
  }
})
