import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

import blackLogo from '../../assets/black-queen.png';
import whiteLogo from '../../assets/white-queen.png';

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEpmtyVertical(target)) return true;
    if (this.cell.isEpmtyHorizontal(target)) return true;
    if (this.cell.isEpmtyHorizontal(target)) return true;
    return false;
  }
}