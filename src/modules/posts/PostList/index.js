// Imports
import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { RefreshControl, FlatList, View } from 'react-native';

// App Imports
import Body from '../../common/Body';
import PostItem from '../PostItem';
import EmptyMessage from '../../common/EmptyMessage';
import Input from '../../common/Input';
import words from '../../../config/words';
import names from '../../../routes/names';
import { setPostList } from '../../../api/actions/postsActions';
import { filteredPosts } from '../../../selectors';
import { postsUpdateSearch } from '../../../api/actions/searchActions';

// UI Imports
import styles from './styles';

// Component
export default function Posts({ route, navigation }) {
  const { name, messages } = route.params;
  const { isLoading } = useSelector((state) => state.authors);
  const posts = useSelector(filteredPosts);

  const dispatch = useDispatch();

  // refresh
  const refresh = useCallback(() => {
    dispatch(setPostList(messages));
  }, [dispatch, messages]);

  // on component load
  useEffect(() => {
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
        {/* Input */}
        <Input onChangeInputText={onChangeInputText} />
        {/* List of Posts */}
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PostItem item={item} />}
          refreshControl={<RefreshControl refreshing={isLoading} />}
          ListEmptyComponent={() => (
            <EmptyMessage message={words.listIsEmpty} />
          )}
          refreshing={isLoading}
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
      messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};
