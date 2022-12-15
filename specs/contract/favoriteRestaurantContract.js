const itActsAsFavoriteRestaurantModel = (favoriterestaurant) => {
  it('should return the movie that has been added', async () => {
    favoriterestaurant.putRestaurant({ id: 1 });
    favoriterestaurant.putRestaurant({ id: 2 });

    expect(await favoriterestaurant.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriterestaurant.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriterestaurant.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should refuse a movie from being added if it does not have the correct property', async () => {
    favoriterestaurant.putRestaurant({ aProperty: 'property' });

    expect(await favoriterestaurant.getAllRestaurants())
      .toEqual([]);
  });

  it('can return all of the movies that have been added', async () => {
    favoriterestaurant.putRestaurant({ id: 1 });
    favoriterestaurant.putRestaurant({ id: 2 });

    expect(await favoriterestaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite movie', async () => {
    favoriterestaurant.putRestaurant({ id: 1 });
    favoriterestaurant.putRestaurant({ id: 2 });
    favoriterestaurant.putRestaurant({ id: 3 });

    await favoriterestaurant.deleteRestaurant(1);

    expect(await favoriterestaurant.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a movie even though the movie has not been added', async () => {
    favoriterestaurant.putRestaurant({ id: 1 });
    favoriterestaurant.putRestaurant({ id: 2 });
    favoriterestaurant.putRestaurant({ id: 3 });

    await favoriterestaurant.deleteRestaurant(4);

    expect(await favoriterestaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };
