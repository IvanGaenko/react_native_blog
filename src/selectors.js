import { createSelector } from 'reselect';

// states
const authorsListSelector = (state) => state.authors.list;
const postsListSelector = (state) => state.posts.posts;
const searchAuthorsSelector = (state) => state.search.authors;
const searchPostsSelector = (state) => state.search.posts;

// Authors Search
export const filteredAuthors = createSelector(
  [authorsListSelector, searchAuthorsSelector],
  (authors, search) => {
    return authors.filter((author) => {
      if (search.length < 1) {
        return true;
      }

      const isMatchByName = author.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const isMatchByEmail = author.email
        .toLowerCase()
        .includes(search.toLowerCase());
      return isMatchByName || isMatchByEmail;
    });
  },
);

// Posts Search
export const filteredPosts = createSelector(
  [postsListSelector, searchPostsSelector],
  (posts, search) => {
    return posts.filter((post) => {
      if (search.length < 1) {
        return true;
      }

      const isMatchByTitle = post.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const isMatchByBody = post.body
        .toLowerCase()
        .includes(search.toLowerCase());
      return isMatchByTitle || isMatchByBody;
    });
  },
);
