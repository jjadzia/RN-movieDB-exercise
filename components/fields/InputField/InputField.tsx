import React, { type ComponentProps } from 'react';
import { View } from 'react-native';

import { useThemedStyles } from '@/hooks/useThemedStyles';
import { createStyles } from './styles';

type Props = ComponentProps<typeof View>;

export function InputField({ style, children }: Props) {
  const styles = useThemedStyles(createStyles);

  return <View style={[styles.inputWrapper, style]}>{children}</View>;
}
