import { StyleSheet } from 'react-native';

export const makeStyles = () =>
  StyleSheet.create({
    flatList: {
      paddingBottom: 20,
      gap: 16,
    },
    columnWrapper: {
      gap: 16,
      justifyContent: 'space-between',
    },
  });
