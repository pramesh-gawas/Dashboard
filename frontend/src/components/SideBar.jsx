import style from "./Sidebar.module.css";
export const SideBar = () => {
  return (
    <aside className={style.sidebar}>
      <div className={style.container}>
        <h4>Apply Filter</h4>
        <div className="dropdown">
          <button>topic</button>
        </div>

        <div className="dropdown">
          <button>Sector</button>
        </div>

        <div className="dropdown">
          <button>Region</button>
        </div>

        <div className="dropdown">
          <button>Pest</button>
        </div>

        <div className="dropdown">
          <button>Swot</button>
        </div>

        <div className="dropdown">
          <button on>Source</button>
        </div>

        <div className="dropdown">
          <button onC>Country</button>
        </div>

        <div className="dropdown">
          <button>City</button>
        </div>
      </div>
    </aside>
  );
};
