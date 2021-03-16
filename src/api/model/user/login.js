import {
  post,
} from '../../http'

export function login (data) {
  return post('/support/account/login', data)
}