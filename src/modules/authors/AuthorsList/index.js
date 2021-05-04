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
import Input from '../../common/Input';
import LoaderContainer from '../../common/ContentLoader';
import getAuthorsList from '../../../api/actions/authorActions';
import { authorsUpdateSearch } from '../../../api/actions/searchActions';
import { filteredAuthors } from '../../../selectors';
import names from '../../../routes/names';

const AuthorsList = ({ navigation }) => {
  const { isLoading } = useSelector((state) => state.authors);
  const authors = useSelector(filteredAuthors);
  const dispatch = useDispatch();

  // refresh
  const refresh = useCallback(() => {
    dispatch(getAuthorsList());
  }, [dispatch]);

  // on component load
  useEffect(() => {
    refresh();
  }, [refresh]);

  // onSelect
  const onSelect = ({ id, name, email, messages }) => () => {
    navigation.navigate(names.POSTS, {
      authorId: Number.parseInt(id, 10),
      name,
      email,
      messages,
    });
  };

  // onChangeInput
  const onChangeInputText = (search) => {
    dispatch(authorsUpdateSearch(search));
  };

  return (
    <Body>
      <View style={styles.container}>
        {/* Input */}
        <Input onChangeInputText={onChangeInputText} />
        {/* List of Authors */}
        <FlatList
          data={authors}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AuthorsItem item={item} onSelect={onSelect} />
          )}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refresh} />
          }
          ListEmptyComponent={() => <LoaderContainer />}
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
