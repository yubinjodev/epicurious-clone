import $ from "jquery";
import { ref } from "vue";

const getPost = (id) => {
  const recipe = ref(null);

  $.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    function (data) {
      const [meals] = data.meals;
      recipe.value = meals;
    }
  );

  return { recipe };
};

export default getPost;
