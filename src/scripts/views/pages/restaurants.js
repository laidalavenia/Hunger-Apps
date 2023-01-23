import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
      <div class="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/banner-small.jpg" class="lazyload">
          <img class="lazyload" src="./images/banner-large.jpg" alt="banner large">
        </picture>
      </div>
      <div class="content">
      <h2 class="content__heading">Restaurant List</h2>
      <div id="movies" class="movies">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const movies = await TheRestaurantDbSource.Restaurants();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createRestaurantItemTemplate(movie);
    });
  },
};

export default NowPlaying;
