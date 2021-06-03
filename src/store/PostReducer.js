export const GET_POST = "GET_POST";
export const SET_POST = "SET_POST";
export const SET_UPDATE_POST = 'SET_UPDATE_POST';
// export const REMOVE_POST = 'REMOVE_POST';


export const getPost = () => ({
  type: GET_POST
});

export const setPost = (post) => ({
  type: SET_POST,
  post
});

// export const deletePost = (post) => ({
//   type: REMOVE_POST,
//   post
// });

export const setUpdatePost = (newPost) => {
  return {
    type: SET_UPDATE_POST,
    newPost
  }
}

const initialState = {
  post: ''
};

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      const { post } = action;
      return { ...state, post };

    case SET_UPDATE_POST:
      return {
        ...state,
        post: state.post.map((post) =>
          post.id === action.newPost.id ? { ...action.newPost } : post
        )
      };

    // case REMOVE_POST:
    //   return {
    //     ...state,
    //     post: state.post.map((post) =>
    //       post.id === action.newPost.id ? { ...action.newPost } : post
    //     )
    //   }
    default:
      return state;
  }
}

export default PostReducer;