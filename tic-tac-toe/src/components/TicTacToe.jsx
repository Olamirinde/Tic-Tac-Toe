import { useEffect, useState } from "react";
import Square from "./Square";

const TicTacToe = () => {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXturn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleClick(getCurrentSquare) {
    let newSquares = [...square];
    if (getWinner(newSquares) || newSquares[getCurrentSquare]) return;
    newSquares[getCurrentSquare] = isXturn ? "X" : "O";
    setIsXTurn(!isXturn);
    setSquare(newSquares);
  }

  function handleRestart() {
    setIsXTurn(true);
    setSquare(Array(9).fill(""));
  }

  useEffect(() => {
    if (!getWinner(square) && square.every((item) => item !== "")) {
      setStatus("This is a draw! Please restart the game");
    } else if (getWinner(square)) {
      setStatus(`Winner is ${getWinner(square)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${isXturn ? "X" : "O"}`);
    }
  }, [square, isXturn]);

  function getWinner(square) {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];

      if (square[x] && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }
    }
    return null;
  }

  return (
    <div className="clear-both table content-none">
      <div className="bg-gray-300">
        <Square value={square[0]} onClick={() => handleClick(0)} />
        <Square value={square[1]} onClick={() => handleClick(1)} />
        <Square value={square[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="bg-gray-300">
        <Square value={square[3]} onClick={() => handleClick(3)} />
        <Square value={square[4]} onClick={() => handleClick(4)} />
        <Square value={square[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="bg-gray-300">
        <Square value={square[6]} onClick={() => handleClick(6)} />
        <Square value={square[7]} onClick={() => handleClick(7)} />
        <Square value={square[8]} onClick={() => handleClick(8)} />
      </div>
      <h1 className="mt-3 p-5 font-mono text-2xl md:text-3xl">{status}</h1>
      <button
        className="ml-2 rounded-full border border-orange-600 bg-orange-900 px-3 py-1 text-sm text-white md:text-2xl"
        onClick={handleRestart}
      >
        Restart
      </button>
    </div>
  );
};

export default TicTacToe;
