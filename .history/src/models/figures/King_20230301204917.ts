import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEpmtyVertical(target)) return true;
    if (this.cell.isEpmtyHorizontal(target)) return true;
    if (this.cell.isEpmtyDiagonal(target)) return true;
    return true;
  }
}
