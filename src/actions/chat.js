import { CURRENT_CHAT } from '../constants/redux';

const selectChatAction = payload => ({ type: CURRENT_CHAT, payload });

export const selectChat = chat => {
  return dispatch => {
    dispatch(selectChatAction(chat));
  }
};
