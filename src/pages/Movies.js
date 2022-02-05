import MovieItem from "../components/MovieItem";

import "./Movies.css";
import MoviesDb from "../database/MoviesDb";

const Movies = (props) => {
  window.addEventListener("DOMContentLoaded", () => {
    const listItems = MoviesDb;
    const listElement = document.getElementById("list");
    const paginationElement = document.getElementById("pagination");

    let currentPage = 1;
    let rows = 5;
    const DisplayList = (items, wrapper, rowsPerPage, page) => {
      console.log("func", listItems, listElement, rows, currentPage);
      wrapper.innerHTML = "";
      page--;

      let start = rowsPerPage * page;
      let end = start + rowsPerPage;
      let paginatedItems = items.slice(start, end);

      console.log(paginatedItems);
      for (let i = start; i < paginatedItems.length; i++) {
        console.log(items[i]);
        let item = items[i];

        let itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.innerText = item.label;

        wrapper.appendChild(itemElement);
      }
    };

    DisplayList(listItems, listElement, rows, currentPage);
  });

  return (
    <div>
      <h1>Movies</h1>

      <main>
        <div className="list" id="list"></div>
        <div className="pagination" id="pagination"></div>
      </main>
    </div>
  );
};

export default Movies;
