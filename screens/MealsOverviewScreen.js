import { useLayoutEffect } from 'react';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

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

  return <MealsList items={displayedMeals} />;
}
