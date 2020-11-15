import { createSelector } from 'reselect';

// states
const authorsSelector = (state) => state.authors;
const authorsListSelector = (state) => state.authors.list;

const postListSelector = (state) => state.posts.post;
const postsListSelector = (state) => state.posts.posts;
const postsSelector = (state) => state.posts;

const searchAuthorsSelector = (state) => state.search.authors;
const searchPostsSelector = (state) => state.search.posts;

// selectors
export const selectAuthors = createSelector(
  authorsSelector,
  (allAuthors) => allAuthors,
);

export const selectPosts = createSelector(
  postsSelector,
  (allPosts) => allPosts,
);

export const selectPostsLength = createSelector(
  postsListSelector,
  (posts) => posts.length === 0,
);

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

export const filteredPosts = createSelector(
  [postListSelector, searchPostsSelector],
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
