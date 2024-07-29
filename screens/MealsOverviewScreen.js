import { useLayoutEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

//we get route,navigation prop to every component that is registered as a sreen in app.js
export default function MealsOverviewScreen({ route, navigation }) {
  //get id of the category that is passed through navigation to this screen
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === catId).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
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
