import {Cell} from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  onHandleCellClick: (cell: Cell) => void
}

export default function CellComponent({cell, selected, onHandleCellClick}: CellProps) {
  return (
    <div
      className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
      onClick={() => onHandleCellClick(cell)}
      style={{ background: cell.available && cell.figure ? 'green' : '' }}
    >
      {cell.available && !cell.figure && <div className="available"/>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt=''/>}
    </div>
  );
}