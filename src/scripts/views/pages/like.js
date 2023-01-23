import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate, createMessageNotFoundRestaurant } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurants</h2>
        <div id="movies" class="movies">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await FavoriteRestaurantIdb.getAllRestaurants();
    const moviesContainer = document.querySelector('#movies');
    if (movies.length === 0) {
      moviesContainer.innerHTML = createMessageNotFoundRestaurant();
    }
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createRestaurantItemTemplate(movie);
    });
  },
};

export default Like;
