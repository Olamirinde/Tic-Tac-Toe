import Square from "./Square";

const TicTacToe = () => {
  return (
    <div className="container">
      <div className="row1">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row2">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row3">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default TicTacToe;
