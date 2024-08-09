import React from 'react';
import { View, Text, Image } from 'react-native';

import { IconSize } from '@/constants/StyleConst';
import { useThemedStyles } from '@/hooks/useThemedStyles';
import { FilmListItem } from '@/models/film';
import { Ionicons } from '@expo/vector-icons';
import { useTMDBFilmImage } from '@/queries/TMDBFilmImage';
import { createStyles } from './styles';

export function FilmItem({ item }: FilmListItem) {
  const styles = useThemedStyles(createStyles);

  const { data: imageUrl } = useTMDBFilmImage(item.id);

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.yearText}>{item.year}</Text>
      </View>
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      ) : (
        <Ionicons name="image-outline" size={IconSize.huge} />
      )}
    </View>
  );
}
