const initialState = {
    glucoseInput: '',
    breadUnitsInput: '',
    insulinInput: '',
    notes: [{
      glucose: 5.5,
      breadUnits: 2,
      insulin: 3,
      date: '05.05.18, Среда',
      time: '12:30',
    },
    {
      glucose: 3.5,
      breadUnits: 2,
      insulin: 0,
      date: '15.06.18, Четверг',
      time: '12:00',
    },
    {
      glucose: 5.9,
      breadUnits: 0,
      insulin: 1,
      date: '07.05.18, Среда',
      time: '00:30',
    },
    {
      glucose: 0,
      breadUnits: 0,
      insulin: 1,
      date: '07.05.18, Среда',
      time: '00:00',
    },
  ],
    selected: [],
  };
  
  const add = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_GLUCOSE": {
        return {...state, 
            glucoseInput: action.glucoseInput
        }
      }
      case "ADD_BREADUNITS": {
        return {...state,
            breadUnitsInput: action.breadUnitsInput
        };
      }
      case "ADD_INSULIN": {
        return {...state,
            insulinInput: action.insulinInput
        };
      }

      case "ADD_DATE": {
        return {...state,
            dateInput: action.dateInput
        };
      }

      case "ADD_TIME": {
        return {...state,
            timeInput: action.timeInput
        };
      }

      case "MAKE_NOTE": {
          console.log(state.notes.length)
        return {...state, 
            notes:[{ 
                glucose: action.payload.glucose,
                breadUnits: action.payload.breadUnits,
                insulin: action.payload.insulin,
                date: action.payload.date,
                time: action.payload.time
            }].concat( [...state.notes])
        }
      }

      case "MAKE_EMPTY_AGAIN": {
        return {...state,
            glucoseInput: action.payload.string,
            insulinInput: action.payload.string,
            breadUnitsInput: action.payload.string,
            dateInput: action.payload.number,
            timeInput: action.payload.number
        }
      }
      
      case "DELETE_NOTE": {
        return {...state,
          notes: [ state.notes.slice().splice(action.payload, 1), ...state.notes,]
        }
      }
      default:
        return state;
    }
  };
  
  export default add;
  