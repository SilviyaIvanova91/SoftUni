export const gameReduser = (state, action) => {
  switch (action.type) {
    case "GAME_FETCH":
      // return Object.assign({}, action.payload);
      return { ...action.payload };
    //return action.game;
    case "COMMENT_ADD":
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            ...action.payload,
            author: {
              email: action.userEmail,
            },
          },
        ],
      };

    default:
      return state;
  }
};
