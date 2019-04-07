import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:8085/'
Axios.defaults.headers.common['Accept'] = 'application/json'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

export default Axios