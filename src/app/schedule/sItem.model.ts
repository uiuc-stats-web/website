export class SItem {
  name: string;
  timeStart: string;
  timeEnd: string;

  constructor(name: string, ts: string, te: string) {
    this.name = name;
    this.timeStart = ts;
    this.timeEnd = te;
  }
}
