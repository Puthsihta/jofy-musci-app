const LOAD_TOKEN = 'LOAD_TOKEN';
export const Token = (
  state = null,
  action: {type: any; token: any; error: any},
) => {
  switch (action.type) {
    case LOAD_TOKEN:
      return action.token;
    default:
      return state;
  }
};
