import { SEARCH } from '../actions'

const searchImage = (state = [], action) => {
    switch(action.type) {
        case SEARCH:{
            const {value} = action;
            return state;
        }
        default: 
            return state;
    }
}

export default searchImage;