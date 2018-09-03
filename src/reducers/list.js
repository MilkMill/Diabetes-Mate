const initialState = {

    glucoseInput: '',
    breadUnitsInput: '',
    insulinInput: '',

    notes: [/* {
      glucose: 5.5,
      breadUnits: 2,
      insulin: 3,
      date: 'May 05,2018',
      time: '12:30',
      dateMS: 1535366118807
    },
    {
      glucose: 3.5,
      breadUnits: 2,
      insulin: 0,
      date: 'Feb 06,2018',
      time: '12:00',
      dateMS: 1535366118810
    },
    {
      glucose: 5.9,
      breadUnits: 0,
      insulin: 1,
      date: 'Mar 25, 2018',
      time: '00:30',
      dateMS: 1535366118809
    },
    {
      glucose: 0,
      breadUnits: 0,
      insulin: 1,
      date: 'Jun 02, 2018',
      time: '00:00',
      dateMS: 1535366118808
    },  */
  ],
    modal: false,
    glucoseSelected: '',
    indexSelected: 0,
    datePicked: '',
    timePicked: '',
  };
  
  const add = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_GLUCOSE": {
        let glucose = '';
        action.glucoseInput.toString() === '0' || 
        action.glucoseInput.toString() === '0.0' ||
        action.glucoseInput.toString() === '.0' ? glucose = "hollow" : 
        glucose = action.glucoseInput;
        
        return {...state, 
            glucoseInput: glucose,
        }
      }
      case "ADD_BREADUNITS": {
        let breadUnits = '';
        action.breadUnitsInput.toString() === '0' || 
        action.breadUnitsInput.toString() === '0.0' ||
        action.breadUnitsInput.toString() === '.0' ? breadUnits = 'hollow' : 
        breadUnits = action.breadUnitsInput;
        return {...state,
            breadUnitsInput: breadUnits
        };
      }
      case "ADD_INSULIN": {
        let insulin = '';
        action.insulinInput.toString() === '0' || 
        action.insulinInput.toString() === '0.0' ||
        action.insulinInput.toString() === '.0' ? insulin = 'hollow' : 
        insulin = action.insulinInput;
        return {...state,
            insulinInput: insulin
        };
      }

      case "ADD_DATE": {
        return {...state,
            dateInput: action.dateInput,           
        };
      }

      case "ADD_DATE_MS": {
        return {...state,
            dateMS: action.dateMS,
        };
      }

      case "ADD_DATE_FROM_CALENDAR": {
        return {...state,
          datePicked: action.datePicked
        }
      }

      case "ADD_TIME_FROM_CALENDAR": {
        return {...state,
          timePicked: action.timePicked
        }
      }

      case "ADD_TIME": {
        return {...state,
            timeInput: action.timeInput
        };
      }

      case "MAKE_NOTE": {
        
        return {...state, 
            notes:[{ 
                glucose: action.payload.glucose,
                breadUnits: action.payload.breadUnits,
                insulin: action.payload.insulin,
                date: action.payload.date,
                time: action.payload.time,
                dateMS: action.payload.dateMS,
            }].concat( [...state.notes])
        }
      }

      case "MAKE_EMPTY_AGAIN": {
        return {...state,
            glucoseInput: action.payload.string,
            insulinInput: action.payload.string,
            breadUnitsInput: action.payload.string,
            dateInput: action.payload.number,
            timeInput: action.payload.number,
            datePicked: action.payload.string,
            timePicked: action.payload.string,
        }
      }

      case "BOOLEAN_MODAL": {
        return {...state, 
            modal: !action.payload ? true : false
        }
      };
      case "REMEMBER_VALUES_THAT_INDEX": {
        return {...state,
        indexSelected: action.payload.index,
        }
      }
      
      case "DELETE_NOTE": {
        const fixed = state.notes;
        fixed.splice(action.index, 1);
        return {...state,
          notes: fixed,
          modal: false
        }
      }

      case "SORT_NOTES": {
        sorted = state.notes;
        sorted.sort(function(a, b){
          return b.dateMS - a.dateMS;
        })
        return {...state,
          notes: sorted,
        }
      }

      default:
        return state;
    }
  };
  
  export default add;
  