const add_glucose = glucoseInput => {
    return {
      type: "ADD_GLUCOSE",
      glucoseInput
    };
  };

const add_breadUnits = breadUnitsInput => {
  return {
    type: "ADD_BREADUNITS",
    breadUnitsInput
  };
};

const add_insulin = insulinInput => {
  return {
    type: "ADD_INSULIN",
    insulinInput
  };
};

const add_date = (dateInput) => {
  return {
    type: "ADD_DATE",
    dateInput
  }
}

const add_dateMS = ( dateMS ) => {
  return {
    type: "ADD_DATE_MS",
    dateMS,
  }
}

const add_date_from_calendar = datePicked => {
  return{
    type: "ADD_DATE_FROM_CALENDAR",
    datePicked
  }
}

const add_time_from_calendar = timePicked => {
  return{
    type: "ADD_TIME_FROM_CALENDAR",
    timePicked
  }
}

const add_time = timeInput => {
  return {
    type: "ADD_TIME",
    timeInput
  }
}

const make_note = (glucose, breadUnits, insulin, datePicked, timePicker, dateMS) => {
  return {
    type: "MAKE_NOTE",
    payload: {
        glucose: glucose,
        breadUnits: breadUnits,
        insulin: insulin,
        date: datePicked,
        time: timePicker,
        dateMS: dateMS,
    }
  };
};

const make_empty_again = () => {
    return {
        type: "MAKE_EMPTY_AGAIN",
        payload: {
          string: "",
          number: null
        }
    }
}

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

const delete_note = (index) => {
  return {
    type: "DELETE_NOTE",
    index,
  }
}

const sort_notes = () => {
  return {
    type: "SORT_NOTES",
  }
}
  
export { 
  add_glucose, 
  add_breadUnits, 
  add_insulin, 
  add_date, 
  add_dateMS,
  add_date_from_calendar,
  add_time_from_calendar,
  add_time, 
  make_note, 
  make_empty_again, 
  boolean_modal,
  remember_values_that_index,
  delete_note,
  sort_notes,
   };