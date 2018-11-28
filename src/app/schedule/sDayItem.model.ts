import { SItem } from './sItem.model';

export class SDayItem {
  date: string;
  items: SItem[];

  constructor(date: string, items: SItem[]) {
    this.date = date;
    this.items = items;
  }
}
