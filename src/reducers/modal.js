const initialState = {
    modal: false,
    glucoseSelected: '',
  };
  
  const modal = (state = initialState, action) => {
    switch (action.type) {
      case "BOOLEAN_MODAL": {
        return {...state, 
            modal: !action.payload ? true : false
        }
      };
      case "REMEMBER_VALUES_THAT_INDEX": {
        return {...state,
        glucoseSelected: action.payload.glucose,
        indexSelected: action.payload.index,
        }
      }
      
      default:
        return state;
    }
  };
  
  export default modal;