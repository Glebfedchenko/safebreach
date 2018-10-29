import axios from 'axios';

const BASE_URL = `https://swapi.co/api/people/`;

export const GET_CHARACTERS = `GET_CHARACTERS`;
export const getCharacters = () => {
  const request = axios.get(BASE_URL).then(res => res.data);
  return {
    type: GET_CHARACTERS,
    payload: request,
  };
};

export const GET_CHARACTER_BY_ID = `GET_CHARACTER_BY_ID`;
export const getCharacterById = id => {
  const request = axios.get(`${BASE_URL}${id}`).then(res => res.data);
  return {
    type: GET_CHARACTER_BY_ID,
    payload: request,
  };
};

export const GO_TO_NEXT_PAGE = `GO_TO_NEXT_PAGE`;
export const goToNextPage = url => {
  const request = axios.get(url).then(res => res.data);
  return {
    type: GO_TO_NEXT_PAGE,
    payload: request,
  };
};

export const GO_TO_PREV_PAGE = `GO_TO_PREV_PAGE`;
export const goToPrevPage = url => {
  const request = axios.get(url).then(res => res.data);
  return {
    type: GO_TO_NEXT_PAGE,
    payload: request,
  };
};

export const SEARCH = `SEARCH`;
export const search = value => ({ type: SEARCH, payload: value });
