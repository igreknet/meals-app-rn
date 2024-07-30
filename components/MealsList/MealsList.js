import { StyleSheet, Text, View, FlatList } from 'react-native';
import MealItem from './MealItem';

export default function MealsList({ items }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MealItem
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            complexity={item.complexity}
            duration={item.duration}
            affordability={item.affordability}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
