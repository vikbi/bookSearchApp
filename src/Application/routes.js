import Home from "./Home";
import BookList from "./BookList";
import { fetchPopularRepos } from "./api";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/book/:id",
    component: BookList,
    fetchInitialData: (path = "") => fetchPopularRepos(path.split("/").pop())
  }
];

export default routes;
