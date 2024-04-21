import { EventParam } from './eventParam';
import { dateToRFC5545 } from '../utils';

export class DatesParam extends EventParam {
  public readonly key = 'dates';
  public readonly value: string;

  constructor(startDate: Date, endDate: Date, isAllDay: boolean = false) {
    super();
    const formattedStartDate = dateToRFC5545(startDate);
    const formattedEndDate = dateToRFC5545(endDate);

    this.value = isAllDay
      ? `${DatesParam._toAllDay(formattedStartDate)}/${DatesParam._toAllDay(
          formattedEndDate
        )}`
      : `${formattedStartDate}/${formattedEndDate}`;
  }

  private static _toAllDay(formattedDate: string): string {
    return formattedDate.replace(/T.*$/, '');
  }

  public encoded(): string {
    return `${this.key}=${this.value}`;
  }
}
