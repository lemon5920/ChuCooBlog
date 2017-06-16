import axios from 'axios'

export default function () {
  axios({
    method: 'get',
    url: 'https://richegg.top/authors',
    withCredentials: true
  })
  .then(function (res) {
    console.log('ok')
  })
  .catch(function (error) {
    console.log(error)
  })
}
