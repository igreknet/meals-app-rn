import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen({ navigation }) {
  function pressHandler(item) {
    //navigate to specific screen, and pass data to next screen
    navigation.navigate('MealsOverview', {
      categoryId: item.id,
    });
  }

  return (
    <FlatList
      key={'#'}
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <CategoryGridTile
          title={item.title}
          color={item.color}
          onPress={() => pressHandler(item)}
        />
      )}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
