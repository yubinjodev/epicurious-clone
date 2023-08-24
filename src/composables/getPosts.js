import $ from "jquery";
import { ref } from "vue";

const getPosts = (query) => {
  const results = ref({});
  const recipesLength = ref(0);

  $.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    function (data) {
      results.value = data;
      recipesLength.value = results.value.meals.length;
    }
  );

  return { results, recipesLength };
};

export default getPosts;
