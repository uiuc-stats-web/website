import { SItem } from './sItem.model';
import { SDayItem } from './sDayItem.model';
import { Subject } from 'rxjs';

export class ScheduleService {
  fireItems = new Subject<SDayItem[]>();
  private items: SDayItem[] = [
    new SDayItem(
      '2018-06-17',
      [
        new SItem('Registration', '2018-06-17T09:30:00', '2018-06-17T10:30:00'),
        new SItem('Opening', '2018-06-17T10:30:00', '2018-06-17T11:30:00'),
        new SItem('Lunch', '2018-06-17T11:30:00', '2018-06-17T13:00:00'),
      ]
    ),
    new SDayItem(
      '2018-06-17',
      [
        new SItem('Registration', '2018-06-17T09:30:00', '2018-06-17T10:30:00'),
        new SItem('Opening', '2018-06-17T10:30:00', '2018-06-17T11:30:00'),
        new SItem('Lunch', '2018-06-17T11:30:00', '2018-06-17T13:00:00'),
      ]
    ),
    new SDayItem(
      '2018-06-17',
      [
        new SItem('Registration', '2018-06-17T09:30:00', '2018-06-17T10:30:00'),
        new SItem('Opening', '2018-06-17T10:30:00', '2018-06-17T11:30:00'),
        new SItem('Lunch', '2018-06-17T11:30:00', '2018-06-17T13:00:00'),
      ]
    ),
    new SDayItem(
      '2018-06-17',
      [
        new SItem('Registration', '2018-06-17T09:30:00', '2018-06-17T10:30:00'),
        new SItem('Opening', '2018-06-17T10:30:00', '2018-06-17T11:30:00'),
        new SItem('Lunch', '2018-06-17T11:30:00', '2018-06-17T13:00:00'),
      ]
    ),
    new SDayItem(
      '2018-06-17',
      [
        new SItem('Registration', '2018-06-17T09:30:00', '2018-06-17T10:30:00'),
        new SItem('Opening', '2018-06-17T10:30:00', '2018-06-17T11:30:00'),
        new SItem('Lunch', '2018-06-17T11:30:00', '2018-06-17T13:00:00'),
      ]
    ),
    new SDayItem(
      '2018-06-17',
      [
        new SItem('Registration', '2018-06-17T09:30:00', '2018-06-17T10:30:00'),
        new SItem('Opening', '2018-06-17T10:30:00', '2018-06-17T11:30:00'),
        new SItem('Lunch', '2018-06-17T11:30:00', '2018-06-17T13:00:00'),
      ]
    ),
  ];

  getItems() {
    return this.items.slice();
  }
}
