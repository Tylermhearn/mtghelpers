import { actionTypes as asyncTypes, isAsyncComplete, isAsyncOperation } from '../../utils/legacyAsyncOpsAdapter'

import * as serviceTypes from '../../constants/asyncOpNames'

const initialState = [{
    cmc: '',
    collector_number: '',
    color_identity: [],
    extras: '',
    id: '',
    imgUri: '',
    language: '',
    name: '',
    oracle_id: '',
    prices: {},
    quantity: '',
    scryfall_id: '',
    set_code: '',
    set_name: '',
    _id: '',
    id: ''
}]

const complete = (action, state) => action.response

const library = (state = initialState, action) => {
    switch (action.type) {
        case asyncTypes.OPERATION:
        case asyncTypes.COMPLETE:
        case asyncTypes.FAILURE:
            if (isAsyncOperation(serviceTypes.GET_LIBRARY)(action)) return { ...state }
            if (isAsyncComplete(serviceTypes.GET_LIBRARY)(action)) return complete(action, state)
            return state
        default: return state
    }
}

export default library
