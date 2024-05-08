import { useState } from "react";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function OrderInfo({ order }) {
  return <h1 className="order">You are at move {order} </h1>;
}
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next player : " + (xIsNext ? "X" : "O");
  }
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const boardRows = [];
  for (let row = 0; row < 3; row++) {
    const boardSquares = [];
    for (let col = 0; col < 3; col++) {
      const index = row * 3 + col;
      boardSquares.push(
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
        />,
      );
    }

    boardRows.push(
      <div key={row} className="board-row">
        {boardSquares}
      </div>,
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {boardRows}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [isOn, setOn] = useState(false);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  let test = () => {
    let description = "Go to game start";
    let ret = [];
    if (isOn) {
      for (let i = history.length - 1; i >= 0; i--) {
        if (i === 0) {
          description = "Go to game start";
        }
        if (i !== 0) {
          description = "Go to move #" + i;
        }
        ret.push(
          <li key={i}>
            <button onClick={() => jumpTo(i)}>{description}</button>
          </li>,
        );
      }
    } else {
      for (let i = 0; i < history.length; i++) {
        if (i !== 0) {
          description = "Go to move #" + i;
        }
        ret.push(
          <li key={i}>
            <button onClick={() => jumpTo(i)}>{description}</button>
          </li>,
        );
      }
    }
    return ret;
  };

  const toggle = (e) => {
    if (e.target.checked) {
      setOn(true);
    } else {
      setOn(false);
    }
  };

  return (
    <div className="game">
      <div className="game-board">
        <OrderInfo order={currentMove} />
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <label className="slider">
          <input type="checkbox" onChange={toggle} />
        </label>
        <ol>{test()}</ol>
      </div>
    </div>
  );
}
