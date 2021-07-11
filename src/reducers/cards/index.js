import { combineReducers } from 'redux'

import card from './card'
import library from './library'

const cardsReducer = combineReducers({
    card,
    library
})

export default cardsReducer
