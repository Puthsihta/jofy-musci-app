const LOAD_TOKEN = 'LOAD_TOKEN';
export const loadToken = (token: any) => {
  return (dispatch: any) => {
    dispatch({type: LOAD_TOKEN, token});
  };
};
