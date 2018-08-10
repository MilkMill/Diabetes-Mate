const boolean_modal = (modal) => {
    return {
        type: "BOOLEAN_MODAL",
        payload: modal
    }
}

const remember_values_that_index = (notes, index) => {
    return {
        type: "REMEMBER_VALUES_THAT_INDEX",
        payload: {
            glucose: notes[index].glucose,
            index: index
        }
    }
}

export { boolean_modal, remember_values_that_index };
  