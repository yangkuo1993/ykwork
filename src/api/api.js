import axios from 'axios'
axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
axios.defaults.timeout = 5000
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export default axios
