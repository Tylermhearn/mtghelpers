/*
 *  NOTES:
 *
 * - saga is no longer exported as there is no longer a need to register into the saga middleware
 * - run connectToRedux after the store is created
 *
 */
import {
  register as registerNew,
  enableMock,
  disableMock,
  prependMiddleware,
  middleware
} from 'use-async-ops'

import { invoke } from 'use-async-ops/dist/middleware'

import {
  actionTypes,
  reducerHelpers,
  reduxMiddleware,
  reducer,
  selectors,
  STORE_DOMAIN
} from 'use-async-ops-redux'

import end from 'use-async-ops/dist/middleware/end'

const connectToRedux = store => {
  prependMiddleware(reduxMiddleware(store.dispatch))
}

const parseNameOrOptions = nameOrOptions => {
  let name = ''
  let channel = ''
  if (typeof nameOrOptions === 'string') {
    name = nameOrOptions || ''
  } else {
    name = nameOrOptions.name || ''
    channel = nameOrOptions.channel || ''
  }
  return { name, channel, options: { channel } }
}

const register = (name, fn, mockFn) => registerNew(name, fn, { mock: mockFn })
const isAsyncOperation = reducerHelpers.isAsyncOperation
const isAsyncComplete = reducerHelpers.isAsyncComplete
const isAsyncFailure = reducerHelpers.isAsyncFailure

const actions = {
  asyncOperationStart: (nameOrOptions, ...args) => {
    const { name, options } = parseNameOrOptions(nameOrOptions)
    invoke({ options, runId: -1, hookId: -1 })(name, ...args)
    return { type: 'IGNORE' }
  }
}

/*
 * Mimic the old callOperation
 */
const compose = (...funcs) =>
  funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg)

const mockOnlyMiddleware = compose(middleware.mock, middleware.call, end)()

const callOperation = async (nameOrOptions, ...args) => {
  const { name, options } = parseNameOrOptions(nameOrOptions)
  return mockOnlyMiddleware({ name, args, runId: -1, hookId: -1, options })
}

/*
 * Export to the legacy async-ops keys
 */
export {
  register,
  callOperation,
  enableMock,
  disableMock,
  actions,
  actionTypes,
  reducerHelpers,
  reducer,
  selectors,
  STORE_DOMAIN,
  isAsyncOperation,
  isAsyncComplete,
  isAsyncFailure,
  connectToRedux
}
