export class Sponsor {
  iconPath: string;
  title: string;
  cols: number;
  rows: number;
  bgColor: string;

  constructor(path: string, title: string, col: number, row: number, bgColor: string) {
    this.iconPath = path;
    this.title = title;
    this.cols = col;
    this.rows = row;
    this.bgColor = bgColor;
  }
}
