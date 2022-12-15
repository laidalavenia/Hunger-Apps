import API_ENDPOINT from '../../globals/api-endpoint';

class TheRestaurantDbSource {
  static async Restaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async detailFoods(id) {
    const response = await this.detailRestaurant(id);
    const foods = response.menus.foods.map((food) => food.name);
    return foods;
  }

  static async detailDrinks(id) {
    const response = await this.detailRestaurant(id);
    const drinks = response.menus.drinks.map((drink) => drink.name);
    return drinks;
  }

  static async reviews(id) {
    const response = await this.detailRestaurant(id);
    let container = '';
    response.customerReviews.forEach((review) => {
      container += `<div class= "review"><p id="date">Tanggal : ${review.date}</p><p>User : ${review.name}</p><p>Comment : ${review.review}</p></div>`;
    });
    return container;
  }
}

export default TheRestaurantDbSource;
