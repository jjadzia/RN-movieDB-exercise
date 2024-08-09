import React, { type ComponentProps } from 'react';
import { Text } from 'react-native';

import { useThemedStyles } from '@/hooks/useThemedStyles';
import { SearchScreenStrings } from '@/assets/strings/en';
import { createStyles } from './styles';

type Props = ComponentProps<typeof Text>;

export function ErrorLabel({ style }: Props) {
  const styles = useThemedStyles(createStyles);

  return (
    <Text style={[styles.error, style]}>
      {SearchScreenStrings.ErrorMessage}
    </Text>
  );
}
