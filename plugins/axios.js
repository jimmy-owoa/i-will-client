export default function ({ $axios, app, store }) {
  $axios.onRequest(config => {
    config.baseURL = 'https://i-will-api.herokuapp.com/api/v1';
  })
}