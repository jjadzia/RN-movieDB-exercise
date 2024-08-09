import React, { type ComponentProps } from 'react';
import { View, Image, Text } from 'react-native';

import { useThemedStyles } from '@/hooks/useThemedStyles';
import { createStyles } from './styles';
import { SearchScreenStrings } from '@/assets/strings/en';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const TMBBLgog = require('@/assets/images/TMDB_logo.png');

type Props = ComponentProps<typeof View> & { width?: number; height?: number };

export function TMDBCredits({ style, height, width }: Props) {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{SearchScreenStrings.TMDBCredits}</Text>
      <Image
        source={TMBBLgog}
        style={{ width: width ?? '100%', height: height ?? 50 }}
        resizeMode="contain"
      />
    </View>
  );
}
