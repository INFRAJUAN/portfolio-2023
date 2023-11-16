// export const myAction = ( state ) => {

// }

export const setEntries = (state, { isDay, lang }) => {
    // state.entries = [...state.entries, ...entries]
    // state.isLoading = false
    state.dayNight = isDay
    state.lang = lang
}

export const updateDayNight = (state) => {
    // const idx = state.entries.map(e => e.id).indexOf(entry.id)
    // state.entries[idx] = entry
    state.dayNight = !state.dayNight
}

export const updateLang = (state, lang) => {
    state.lang = lang
}

// export const addEntry = (state, entry) => {
//     // state -> entries  -> la nueva entrada debe de ser la primera
//     state.entries = [entry, ...state.entries]
// }

// export const deleteEntry = (state, id) => {
//     state.entries = state.entries.filter(entry => entry.id !== id)
// }
