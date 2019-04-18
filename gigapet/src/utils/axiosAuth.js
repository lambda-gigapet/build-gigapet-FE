import axios from 'axios'

// export default () => {
//   const token = localStorage.getItem('token')
//   return axios.create({
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `${token}`
//     }
//   })
// }

const axiosWithHeaders = () => {
  return axios.create({
    headers: {
      'content-type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
  })
};
export default axiosWithHeaders
