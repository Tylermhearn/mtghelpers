import { actionTypes as asyncTypes, isAsyncComplete, isAsyncOperation } from '../../utils/legacyAsyncOpsAdapter'

import * as serviceTypes from '../../constants/asyncOpNames'

const initialState = {
    id: '',
    name: ''
}

const complete = (action, state) => action.response

const card = (state = initialState, action) => {
    switch (action.type) {
        case asyncTypes.OPERATION:
        case asyncTypes.COMPLETE:
        case asyncTypes.FAILURE:
            if (isAsyncOperation(serviceTypes.GET_CARD)(action)) return { ...state }
            if (isAsyncComplete(serviceTypes.GET_CARD)(action)) return complete(action, state)
            return state
        default: return state
    }
}

export default card
