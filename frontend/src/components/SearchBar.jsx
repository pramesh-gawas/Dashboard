import style from "./SearchBar.module.css";
export const SearchBar = () => {
  return (
    <header class="p-3 mb-3 border-bottom">
      <div class={style.container}>
        <div class="d-flex flex-wrap a justify-content-lg-start">
          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class={style.search}
              placeholder="Search..."
              aria-label="Search"
              jf-ext-cache-id="1"
            />
          </form>
        </div>
      </div>
    </header>
  );
};
