const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurant');
// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/like');
});
// eslint-disable-next-line no-undef
Scenario('test something', async ({ I }) => {
  I.see('Daftar Restoran Favorit Belum Ada.', '.restaurant-item_not_found');
  I.amOnPage('/');
  I.seeElement('.restaurant_title a');
  // eslint-disable-next-line no-undef
  const firstFilm = locate('.restaurant_title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);
  I.seeElement('#likeButton');
  I.seeElement("[aria-label='like this movie']");
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedFilmTitle = await I.grabTextFrom('.restaurant_title');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});
