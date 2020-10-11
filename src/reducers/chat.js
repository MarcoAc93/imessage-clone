import { CURRENT_CHAT } from '../constants/redux';

const reducer = (state = { chatName: null, chatId: null }, action) => {
  switch (action.type) {
    case CURRENT_CHAT:
      return {
        ...state,
        chatName: action.payload.chatName,
        chatId: action.payload.chatId
      };
    default:
      return state;
  }
}

export default reducer;
