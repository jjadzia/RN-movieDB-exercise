import React, { useCallback, type ComponentProps } from 'react';
import { FlatList, View } from 'react-native';

import { useThemedStyles } from '@/hooks/useThemedStyles';
import { FilmData } from '@/models/film';
import { FilmItem } from '../FilmItem/FilmItem';
import { createStyles } from './styles';

type Props = Omit<ComponentProps<typeof FlatList<FilmData>>, 'renderItem'>;

export function ListOfFilms({ data, style, ...props }: Props) {
  const styles = useThemedStyles(createStyles);

  const Separator = useCallback(
    () => <View style={styles.separator} />,
    [styles]
  );

  return (
    <FlatList
      data={data}
      style={[styles.container, style]}
      ItemSeparatorComponent={Separator}
      showsVerticalScrollIndicator={false}
      {...props}
      keyExtractor={(item) => `${item.id}-${item.title}`}
      renderItem={({ item }) => <FilmItem item={item} />}
    />
  );
}
