/* eslint-disable camelcase */
const axios = require('axios')
const Router = require('router')

const dataAdapter = function () {
  axios.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem('authenticated')
      if (token) {
        config.headers.Authorization = token
      } else {
        Router.default.app._router.push({ path: '/login', query: { redirect: document.location.href.substring(document.location.href.lastIndexOf('/') + 1) } }).catch()
      }
      return config
    },
    (error) => {
      Promise.reject(error)
    }
  )
  axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response.status === 401) {
        Router.default.app._router.push({ path: '/login', query: { redirect: document.location.href.substring(document.location.href.lastIndexOf('/') + 1) } }).catch()
      }
      return Promise.reject(error)
    }
  )

  return {

    getStructure: function (itemID, view_type, tag_type, query_id, configuration) {
      window.app.$emit('StartLoadingData')
      return axios.post('Server/odata/method.HSQ_GetStructure',
        JSON.stringify({ id: itemID, query_id: query_id, view_type: view_type, tag_type: tag_type, configuration: configuration })).then(function (result) {
        if (result.data.Item.forEach === undefined) result.data.Item = [result.data.Item]
        result.data.Item.forEach((element) => {
        })
        window.app.$emit('EndLoadingData')
        return result.data.Item
      }).catch(
        function (error) {
          window.app.$emit('EndLoadingData')
          return Promise.reject(error)
        }
      )
    }
  }
}

module.exports = dataAdapter()
