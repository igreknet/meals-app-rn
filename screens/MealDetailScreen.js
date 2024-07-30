import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favoritesContext';

export default function MealDetailsScreen({ route, navigation }) {
  //connect context
  const favoriteMealsCtx = useContext(FavoritesContext);

  //give access to params, that has been set to this route
  const mealId = route.params.mealId;

  //get meal data by id
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  //check if there is in ids array a mealId
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  //add or remove meals from favorites
  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  //set a button on header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        style={styles.image}
        source={{ uri: selectedMeal.imageUrl }}
      />

      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailTextStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailTextStyle: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '80%',
  },
});
