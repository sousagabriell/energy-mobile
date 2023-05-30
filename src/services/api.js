import axios from 'axios'

export const domain = 'http://54.196.176.154/api/v1'

export const api = axios.create({
  baseURL: domain
})

// export const api = axios.create({
//   baseURL: 'http://54.234.170.70/api/v1',
// });
