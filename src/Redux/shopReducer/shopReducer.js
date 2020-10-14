// import SHOP_DATA from './shopData'

const initialState = {
    collections : null,
    collectionsss : ''
}

const shopReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'UPDATE_COLLECTION' :
            return {
                ...state,
                collections : action.payload
            }
        case 'UPDATE_COLLECTIONSSS' :
            return {
                ...state,
                collectionsss : action.payload
            }
        default :
            return state
    }
}

export default shopReducer
