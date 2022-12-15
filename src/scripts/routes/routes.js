import NowPlaying from '../views/pages/restaurants';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': NowPlaying, // default page
  '/restaurants': NowPlaying,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
