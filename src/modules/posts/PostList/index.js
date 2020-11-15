// Imports
import React, { useLayoutEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { RefreshControl, FlatList, View } from 'react-native';

// App Imports
import Body from '../../common/Body';
import PostItem from '../PostItem';
import EmptyMessage from '../../common/EmptyMessage';
import Input from '../../common/Input';
import { getCurrentAuthor } from '../../../api/actions/authorActions';
import {
  getCurrentPost,
  getExistedPost,
} from '../../../api/actions/postsActions';
import words from '../../../config/words';
import names from '../../../routes/names';
import { selectPostsLength, filteredPosts } from '../../../selectors';
import { postsUpdateSearch } from '../../../api/actions/searchActions';

// UI Imports
import styles from './styles';

// Component
export default function Posts({ route, navigation }) {
  const { authorId, name } = route.params;
  const { postsIsLoading } = useSelector((state) => state.posts);
  const postsLength = useSelector(selectPostsLength);
  const post = useSelector(filteredPosts);
  const dispatch = useDispatch();

  const refresh = useCallback(() => {
    if (postsLength) {
      dispatch(getCurrentAuthor(authorId));
      dispatch(getCurrentPost(authorId));
    } else {
      dispatch(getExistedPost(authorId));
    }
  }, [dispatch, postsLength, authorId]);

  // on component load
  useLayoutEffect(() => {
    if (name === undefined) {
      navigation.navigate(names.ROOT_SCREEN);
    }
    refresh();
    navigation.setOptions({
      title: `${name}${words.postsTitle}`,
    });
  }, [navigation, name, refresh]);

  // onChangeInput
  const onChangeInputText = (search) => {
    dispatch(postsUpdateSearch(search));
  };

  return (
    <Body>
      <View style={styles.container}>
        <Input onChangeInputText={onChangeInputText} />
        <FlatList
          data={post}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PostItem item={item} />}
          refreshControl={
            <RefreshControl refreshing={postsIsLoading} onRefresh={refresh} />
          }
          ListEmptyComponent={() => (
            <EmptyMessage message={words.listIsEmpty} />
          )}
          refreshing={postsIsLoading}
        />
      </View>
    </Body>
  );
}

// Component Properties
Posts.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    setOptions: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      authorId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
