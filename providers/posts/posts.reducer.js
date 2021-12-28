export const POST_INITIAL_STATE = {
  posts: [
    {
      id: "1",
      userName: "Prophet Bestman",
      img: "/dp.jfif",
      caption: "I am the best developer. Just on the becoming journey",
    },
    {
      id: "2",
      userName: "Prophet Bestman",
      img: "/dp.jfif",
      caption: "I am the best developer. Just on the becoming journey",
    },
    {
      id: "3",
      userName: "Prophet Bestman",
      img: "/dp.jfif",
      caption: "I am the best developer. Just on the becoming journey",
    },
  ],
};

const postsReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default postsReducer;
