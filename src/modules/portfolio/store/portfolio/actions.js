// import portfolioApi from '../../../api/portfolioApi'
// export const myAction = async ({ commit }) => {

// }

export const loadEntries = async ({ commit }) => {
    // const { data } = await portfolioApi.get('/entries.json')

    // if (!data) {
    //     commit('setEntries', [])
    //     return
    // }

    // const entries = []
    // for (const id of Object.keys(data)) {
    //     entries.push({
    //         id,
    //         ...data[id]
    //     })
    // }

    // commit('setEntries', entries)

    commit('setEntries', true)
}

export const updateEntry = async ({ commit }, isDay) => { // entry debe de ser un parámetro
    // const { date, picture, text } = entry
    // const dataToSave = { date, picture, text }

    // const resp = await portfolioApi.put(`/entries/${entry.id}.json`, dataToSave)
    // console.log(resp)

    // // Commit de una mutation -> updateEntry
    // commit('updateEntry', { ...entry })

    //isDay is just a true/false
    commit('updateEntry', isDay)
}

// export const createEntry = async ({ commit }, entry) => {
//     // // dataToSave
//     // const { date, picture, text } = entry
//     // const dataToSave = { date, picture, text }

//     // const { data } = await portfolioApi.post('entries.json', dataToSave)

//     // dataToSave.id = data.name

//     // commit('addEntry', dataToSave)

//     // return data.name
// }

// export const deleteEntry = async ({ commit }, id) => {
//     // await portfolioApi.delete(`/entries/${id}.json`)
//     // commit('deleteEntry', id)

//     // return id
// }
