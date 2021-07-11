import { register } from 'use-async-ops'

import { defaultOptions, handleFetch } from '../utils/fetch'
import * as asyncOpNames from '../constants/asyncOpNames'
import mocks from './mock'

let URL = 'http://127.0.0.1:5000'

const mtgApiService = handleFetch((path, options) => window.fetch(URL + path, options))

const registerService = (code, service) => register(code, service, { mock: mocks[code] })

registerService(asyncOpNames.GET_LIBRARY, () => mtgApiService('/library', {
  // ...defaultOptions,
  method: 'GET'
}))

