import { ref } from "vue";

const ingredients = ref([]);

const combineIngredients = (key, recipe) => {
  if (key.includes("Ingredient")) {
    const index = key.replace("strIngredient", "");
    const {
      [`strIngredient${index}`]: ingredient,
      [`strMeasure${index}`]: measure,
    } = recipe;
    const combined = `${measure} ${ingredient}`;
    ingredients.value.push(combined);
  }
};

const filterIngredients = (recipe) => {
  for (const key in recipe) {
    if (recipe[key]) {
      if (key.includes("Ingredient") || key.includes("Measure")) {
        combineIngredients(key, recipe);
      }
    }
  }
  return { ingredients };
};

export default filterIngredients;
