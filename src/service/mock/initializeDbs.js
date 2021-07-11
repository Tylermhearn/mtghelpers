import { collectionDb } from '.'
import * as mockLibrary from './tools/mockLibrary'

const initializeDbs = () => {
    collectionDb.add(mockLibrary.solRing)
    collectionDb.add(mockLibrary.manaCrypt)
    collectionDb.add(mockLibrary.bloomTender)
    collectionDb.add(mockLibrary.treachery)
}

export default initializeDbs
