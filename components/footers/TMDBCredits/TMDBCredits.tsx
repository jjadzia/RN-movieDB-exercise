import React, { type ComponentProps } from 'react';
import { View, Image, Text } from 'react-native';

import { useThemedStyles } from '@/hooks/useThemedStyles';
import { createStyles } from './styles';
import { SearchScreenStrings } from '@/assets/strings/en';

type Props = ComponentProps<typeof View> & { width?: number; height?: number };

export function TMDBCredits({ style, height, width }: Props) {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{SearchScreenStrings.TMDBCredits}</Text>
      <Image
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        source={require('@/assets/images/TMDB_logo.png')}
        style={{ width: width ?? '100%', height: height ?? 50 }}
        resizeMode="contain"
      />
    </View>
  );
}
