import { createStore } from 'vuex'

import portfolio from '../modules/portfolio/store/portfolio'

const store = createStore({
    modules: {
        portfolio
    }
})

export default store
