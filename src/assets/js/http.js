import axios from 'axios'
import gUrl from '@/assets/js/gUrl'
let $http=axios.create({
  baseURL:gUrl,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
})
export default $http
