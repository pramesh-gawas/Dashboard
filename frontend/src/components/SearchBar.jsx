export const SearchBar = () => {
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className={style.container}>
        <div className="d-flex flex-wrap a justify-content-lg-start">
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className={style.search}
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
