// export const myAction = ( state ) => {

// }

export const setEntries = (state, isDay) => {
    // state.entries = [...state.entries, ...entries]
    // state.isLoading = false
    console.log('setEntries Mutation', isDay)
    state.dayNight = isDay
}

export const updateEntry = (state, isDay) => {
    // const idx = state.entries.map(e => e.id).indexOf(entry.id)
    // state.entries[idx] = entry
    state.dayNight = !state.dayNight
}

// export const addEntry = (state, entry) => {
//     // state -> entries  -> la nueva entrada debe de ser la primera
//     state.entries = [entry, ...state.entries]
// }

// export const deleteEntry = (state, id) => {
//     state.entries = state.entries.filter(entry => entry.id !== id)
// }
