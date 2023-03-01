import React, {useEffect, useState} from 'react'
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export default function BoardComponent({board, setBoard}: BoardProps) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function handleCellClick(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      updateBoard();
    } else {
      setSelectedCell(cell)
    }
  }

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  function highlightCells() {
    board.highlightCell(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div
      className="board"
    >
      {board.cells.map((row, index) =>
        <React.Fragment key={index}>
          {row.map((cell) =>
            <CellComponent
              cell={cell}
              key={cell.id}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              onHandleCellClick={handleCellClick}
            />
          )}
        </React.Fragment>
      )}
    </div>
  );
}