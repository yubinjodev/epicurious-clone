const combineIngredients = (key, recipe, ingredients) => {
  if (key.includes("Ingredient")) {
    const index = key.replace("strIngredient", "");
    const {
      [`strIngredient${index}`]: ingredient,
      [`strMeasure${index}`]: measure,
    } = recipe;
    const combined = `${measure} ${ingredient}`;
    ingredients.push(combined);
  }
};

const filterIngredients = (recipe) => {
  const ingredients = [];
  for (const key in recipe) {
    if (recipe[key]) {
      if (key.includes("Ingredient") || key.includes("Measure")) {
        combineIngredients(key, recipe, ingredients);
      }
    }
  }
  return ingredients;
};

export default filterIngredients;
