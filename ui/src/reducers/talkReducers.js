import { LIST_TALKS, GET_TALK, SEARCH_TALKS } from "../actions/types";

const INITIAL_STATE = {}

export default  (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case GET_TALK:
      return { ...state, [action.payload.id]: action.payload };

    case LIST_TALKS:
      let listState = {};
      action.payload.forEach((talk) => {
        talk.show = true;
        listState = { ...listState, [talk.id]: talk }
      });
      return listState;
    case SEARCH_TALKS:
      let searchState = {};
      const term = action.payload.toLowerCase();
      Object.values(state).forEach((talk) => {
        if( term ) {
          talk.show = false;
          if (talk.SearchTerms.toLowerCase().includes(term) ||
            talk.Description.toLowerCase().includes(term) ||
            talk.Presenter.toLowerCase().includes(term)) {
            talk.show = true;
          }
        } else {
          talk.show = true;
        }
        searchState = { ...searchState, [talk.id]: talk }
      });
      return searchState;
    default:
      return state;
  }
};
