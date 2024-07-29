import { StyleSheet, Text, View } from 'react-native';

export default function List({ data }) {
  return data.map(dataPoint => (
    <View
      key={dataPoint}
      style={styles.listItem}
    >
      <Text style={styles.textItem}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  textItem: {
    color: '#351401',
    textAlign: 'center',
  },
});
