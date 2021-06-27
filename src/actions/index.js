import { register } from '../../utils/legacyAsyncOpsAdapter'
import { defaultOptions, handleFetch } from '../../utils/arcFetch'
import * as services from '../../constants/serviceTypes'
import mocks from './mock'
import * as addnav from '../../utils/addnav'
import * as serviceCodes from '../../constants/serviceCodes'
// import toQueryStringParams from '../../utils/serializeToUrlParams'

const registerService = (code, fetcher) => register(code, handleFetch(fetcher), mocks[code])

// const getRunlevel = () => window.DEMO_MODE.isTestingRunlevel() ? 'TESTING' : 'PRODUCTION'

const fetcher = serviceCode => (path, options) => window.fetch(addnav.getUrl(serviceCode) + path, options)

const arcApiFetcher = fetcher(serviceCodes.ARC)

registerService(services.GET_LIBRARY, () => arcApiFetcher('/api/commissions/managers', {
  ...defaultOptions,
  method: 'GET'
}))
