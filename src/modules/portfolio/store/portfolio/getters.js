
// export const myGetter = ( state ) => {
//  return state
// }

export const getDayNight = (state) => {
    console.log('Getter', state.dayNight)
    return state.dayNight
}

export const setLang = (state) => {
    console.log('Getters', state.lang)
    return state.lang
}

// export const getEntriesByTerm = (state) => (term = '') => {
//     if (term.length === 0) return state.entries

//     return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase()))
// }

// // id
// export const getEntryById = (state) => (id = '') => {
//     const entry = state.entries.find(entry => entry.id === id)

//     if (!entry) return

//     return { ...entry } // TODO: prueben
// }
