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

const add_date = dateInput => {
  return {
    type: "ADD_DATE",
    dateInput
  }
}

const add_time = timeInput => {
  return {
    type: "ADD_TIME",
    timeInput
  }
}

const make_note = (glucose, breadUnits, insulin, date, time) => {
  return {
    type: "MAKE_NOTE",
    payload: {
        glucose: glucose,
        breadUnits: breadUnits,
        insulin: insulin,
        date: date,
        time: time
    }
  };
};

const make_empty = () => {
    return {
        type: "MAKE_EMPTY_AGAIN",
        payload: {
          string: "",
          number: null
        }
    }
}

const delete_note = (index) => {
  return {
    type: "DELETE_NOTE",
    payload: index
  }
}
  
export { add_glucose, add_breadUnits, add_insulin, add_date, add_time, make_note, make_empty, delete_note };
  