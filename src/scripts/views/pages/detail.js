import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheRestaurantDbSource.detailRestaurant(url.id);
    const foods = await TheRestaurantDbSource.detailFoods(url.id);
    const drinks = await TheRestaurantDbSource.detailDrinks(url.id);
    const reviews = await TheRestaurantDbSource.reviews(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createRestaurantDetailTemplate({
      movie, foods, drinks, reviews,
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteMovies: FavoriteRestaurantIdb,
      movie: {
        id: movie.id,
        pictureId: movie.pictureId,
        rating: movie.rating,
        description: movie.description,
        name: movie.name,
      },
    });
  },
};

export default Detail;
