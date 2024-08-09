import { StyleSheet } from 'react-native';
import { ColorsType } from '@/constants/Colors';
import {
  IconSize,
  ListItemShadow,
  Radius,
  Spacing,
} from '@/constants/StyleConst';

export const createStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: Spacing.small,
      backgroundColor: colors.background,
      flexDirection: 'row',
      gap: Spacing.small,
      borderRadius: Radius.small,
      overflow: 'visible',
      ...ListItemShadow,
    },
    textWrapper: {
      flex: 1,
    },
    titleText: {
      color: colors.text,
      fontWeight: 'bold',
    },
    yearText: {
      color: colors.text,
    },
    image: {
      width: IconSize.huge,
      height: IconSize.huge,
      borderRadius: Radius.small,
    },
  });
