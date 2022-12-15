import CONFIG from '../../../globals/config';

const createRestaurantDetailTemplate = ({
  movie, foods, drinks, reviews,
}) => `
<h2 class="restaurant_title">${movie.name}</h2>
  <img class="lazyload restaurant_poster" data-src="${CONFIG.BASE_IMAGE_URL + movie.pictureId}" alt="${movie.title}" />
  <div class="restaurant_info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${movie.city}</p>
    <h4>Address</h4>
    <p>${movie.address}</p>
  </div>
  <div class="restaurant_overview">
    <h4>Foods List</h4>
    <p>${foods}</p>
    <h4>Drinks List</h4>
    <p>${drinks}</p>
    <h3>Description</h3>
    <p>${movie.description}</p>
    <h3>Review Customers</h3>
    <div class="reviews">${reviews}</div>
  </div>
`;

const createRestaurantItemTemplate = (movie) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="lazyload restaurant-item__header__poster" alt="${movie.name}"
           data-src="${movie.pictureId ? CONFIG.BASE_IMAGE_URL + movie.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${movie.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant_title"><a class="restaurant-item-title" href="/#/detail/${movie.id}">${movie.name}</a></h3>
      <p>${movie.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
const createMessageNotFoundRestaurant = () => `
  <div class="restaurant-item_not_found">Daftar Restoran Favorit Belum Ada.</div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createMessageNotFoundRestaurant,
};
