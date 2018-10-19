import fetch from "isomorphic-fetch";

export function fetchPopularRepos(title = all) {

  const url = encodeURI(
    `https://www.goodreads.com/book/auto_complete?format=json&q=${title}`
  );

  return fetch(url, { mode: "no-cors" })
    .then(data => data.text())
    .then(books => {
      return books ? JSON.parse(books) : {};
    })
    .catch(error => {
      console.log("error", error);
      return null;
    });
}
