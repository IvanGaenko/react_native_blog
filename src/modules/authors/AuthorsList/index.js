// Imports
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { View, RefreshControl, FlatList } from 'react-native';

// UI Imports
import styles from './styles';

// App Imports
import Body from '../../common/Body';
import AuthorsItem from '../AuthorsItem';
import EmptyMessage from '../../common/EmptyMessage';
import Input from '../../common/Input';
import { getAuthorsList } from '../../../api/actions/authorActions';
import { getPostsList } from '../../../api/actions/postsActions';
import { authorsUpdateSearch } from '../../../api/actions/searchActions';
import { filteredAuthors } from '../../../selectors';
import words from '../../../config/words';
import names from '../../../routes/names';

const AuthorsList = ({ navigation }) => {
  const { isLoading } = useSelector((state) => state.authors);
  const { posts } = useSelector((state) => state.posts);
  const authors = useSelector(filteredAuthors);
  const dispatch = useDispatch();

  // refresh
  const refresh = useCallback(() => {
    dispatch(getAuthorsList());
    dispatch(getPostsList());
  }, [dispatch]);

  // on component load
  useEffect(() => {
    refresh();
  }, [refresh]);

  // onSelect
  const onSelect = ({ id, name }) => () => {
    navigation.navigate(names.POSTS, {
      authorId: Number.parseInt(id, 10),
      name,
    });
  };

  // onChangeInput
  const onChangeInputText = (search) => {
    dispatch(authorsUpdateSearch(search));
  };

  // postsAmount
  const getPostsAmount = (id) => {
    return posts.filter((e) => e.userId === id).length;
  };

  return (
    <Body>
      <View style={styles.container}>
        <Input onChangeInputText={onChangeInputText} />
        <FlatList
          data={authors}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AuthorsItem
              item={item}
              onSelect={onSelect}
              postsAmount={getPostsAmount(item.id)}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refresh} />
          }
          ListEmptyComponent={() => (
            <EmptyMessage message={words.listIsEmpty} />
          )}
          refreshing={isLoading}
        />
      </View>
    </Body>
  );
};

// Component Properties
AuthorsList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AuthorsList;
