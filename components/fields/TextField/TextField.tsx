import React, { useCallback, useRef, type ComponentProps } from 'react';
import { Keyboard, TextInput, TouchableOpacity, ViewStyle } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { IconSize } from '@/constants/StyleConst';
import { useThemedStyles } from '@/hooks/useThemedStyles';
import { InputField } from '../InputField/InputField';
import { createStyles } from './styles';

type Props = ComponentProps<typeof TextInput> & {
  containerStyle?: ViewStyle;
  showReturnIcon?: boolean;
  onIconPress?: (text: string) => void;
};

export function TextField({
  containerStyle,
  showReturnIcon = true,
  onIconPress,
  ...props
}: Props) {
  const styles = useThemedStyles(createStyles);

  const textInputRef = useRef<TextInput>(null);

  const handleIconPress = useCallback(() => {
    textInputRef?.current?.blur();
    Keyboard.dismiss();
    onIconPress?.(props.value ?? '');
  }, [showReturnIcon]);

  return (
    <InputField style={[styles.wrapper, containerStyle]}>
      <TextInput style={styles.textInput} {...props} ref={textInputRef} />
      {showReturnIcon && (
        <TouchableOpacity onPress={handleIconPress}>
          <Ionicons
            name={'arrow-forward-circle-outline'}
            size={IconSize.medium}
          />
        </TouchableOpacity>
      )}
    </InputField>
  );
}
