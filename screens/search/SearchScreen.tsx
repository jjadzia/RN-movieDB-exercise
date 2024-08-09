import React, { useCallback, useMemo } from 'react';

import { useThemedStyles } from '@/hooks/useThemedStyles';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
} from 'react-native';
import { TextField } from '@/components/fields/TextField/TextField';
import { useSearchMovies } from './useSearchMovies';
import { SearchScreenStrings } from '@/assets/strings/en';
import { ErrorLabel } from '@/components/errors/ErrorLabel';
import { createStyles } from './styles';
import { TMDBCredits } from '@/components/footers/TMDBCredits/TMDBCredits';
import { ListOfFilms } from '@/components/films/FilmsList/ListOfFilms';
import { EmptyResults } from '@/components/EmptyResults/EmptyResults';

export function SearchScreen() {
  const styles = useThemedStyles(createStyles);

  const {
    inputValue,
    setInputValue,
    results,
    hasNextPage,
    fetchNextPage,
    setSearchParam,
    isFetchingNextPage,
    isError,
    isFetching,
    searchParam,
  } = useSearchMovies();

  const onEndReached = useCallback(() => {
    if (isFetchingNextPage) return;
    if (hasNextPage) fetchNextPage();
  }, [isFetchingNextPage, hasNextPage, fetchNextPage]);

  const Footer = useMemo(() => {
    return results.length ? <TMDBCredits /> : null;
  }, [results.length]);

  const isEmptyResults = !results.length && !isFetching && !!searchParam;
  return (
    <View style={styles.container}>
      <TextField
        value={inputValue}
        onChangeText={setInputValue}
        placeholder={SearchScreenStrings.InputPlaceholder}
        onBlur={(event: NativeSyntheticEvent<TextInputFocusEventData>) =>
          setSearchParam(event.nativeEvent.text)
        }
      />
      {!isEmptyResults ? (
        <ListOfFilms
          onEndReached={onEndReached}
          data={results}
          ListFooterComponent={Footer}
        />
      ) : (
        <EmptyResults />
      )}
      {isError && <ErrorLabel />}
    </View>
  );
}
