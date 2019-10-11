import { LOAD_JOKES, FETCH_JOKES, DELETE_JOKE } from '../actions/types';

const initialState = {
    //Calling the API end point only one time and storing the JSON in our State.
    apiList: [],
    //Separating the 10 random facts from the main api list for better data manipulation and up scaling opportunities in the future.
    renderList: []
}

export default function (state = initialState, action) {

    switch (action.type) {

        case LOAD_JOKES:
            //Adding a 'viewed' boolean to each fact (one time on load) to avoid repetition and leaving the door open for other options.
            const loadNewList = action.payload.map(data => {
                data['viewed'] = false;
                return data;
            })
            return {
                ...state,
                apiList: loadNewList
            }
        case FETCH_JOKES:
            const newLists = getTenRandomFacts(state.apiList)
            return {
                ...state,
                renderList: newLists.newTenFacts,
                //I update the main api list to reflects the changes of the viewed property for these specific 10
                apiList: newLists.newApiList
            }
        case DELETE_JOKE:
            const index = action.index;
            /*Since this fact won't be displayed again thanks the 'viewed' property, we are only
             deleting facts from the rendered list to avoid calling the api end point again if we want to undo a delete */
            const newRenderList = [...state.renderList.slice(0, index), ...state.renderList.slice(index + 1)];
            return {
                ...state,
                renderList: newRenderList
            };
        default:
            return state;
    }
}

const getTenRandomFacts = (arr) => {
   
    const newTenFactsArray = [];

    while (newTenFactsArray.length < 10) {
        let i = Math.floor(Math.random() * arr.length);
        //Check if a fact has already been viewed
        if (!arr[i]["viewed"]) {
            //Change viewed property to true
            arr[i]["viewed"] = true;
            newTenFactsArray.push(arr[i])
        }
    }
    const factData = { newTenFacts: newTenFactsArray, newApiList: arr }
    return factData;
}