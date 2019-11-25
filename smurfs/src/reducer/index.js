import { SMURF_SUCCESS, SMURF_ERROR, GET_SMURFS} from '../actions/index';

const initialState = {

};


function reducer (state = initialState, action) {

    switch(action.type) {

        case GET_SMURFS:

            return {...state,
                isRendering: true,
                error: " "
            };

        case SMURF_SUCCESS:

            return {...state,
            isRendering: false,
            error: " ",
            smurfs: action.payload
        };

        case SMURF_ERROR: 
            
            return {...state,
            isRendering: false,
            error: action.payload}
        
        default: 
                return state;

    }

};

export default reducer;

