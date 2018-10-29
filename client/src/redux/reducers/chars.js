import * as actions from '../actions/chars';

export const chars = (
  state = {
    chars: [],
    displayResults: [],
    profile: {},
    searchValue: '',
    nextPage: null,
    prevPage: null,
  },
  action
) => {
  switch (action.type) {
    case actions.GET_CHARACTERS:
      return {
        ...state,
        chars: action.payload.results,
        displayResults: action.payload.results,
        nextPage: action.payload.next,
      };
    case actions.GET_CHARACTER_BY_ID:
      return {
        ...state,
        chars: action.payload.results,
        displayResults: action.payload.results,
        profile: action.payload,
      };
    case actions.GO_TO_NEXT_PAGE:
      return {
        ...state,
        chars: action.payload.results,
        displayResults: action.payload.results,
        nextPage:
          state.nextPage !== action.payload.next
            ? action.payload.next
            : state.nextPage,
        prevPage: action.payload.previous,
      };
    case actions.GO_TO_PREV_PAGE:
      return {
        ...state,
        chars: action.payload.results,
        displayResults: action.payload.results,
        nextPage: action.payload.next,
        prevPage: action.payload.previous,
      };
    case actions.SEARCH:
      return {
        ...state,
        searchValue: action.payload,
        chars: state.displayResults.filter(c =>
          c.name.toLowerCase().includes(action.payload)
        ),
      };

    default:
      return state;
  }
};
