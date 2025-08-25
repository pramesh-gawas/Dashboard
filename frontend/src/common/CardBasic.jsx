export const CardBasic = ({ title, cardValue, width }) => {
  return (
    <div className="card m-1 " style={{ width: width, boxShadow: "2px 2px" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{cardValue}</p>
      </div>
    </div>
  );
};
