import { EventParam } from './eventParam';

export class DatesParam extends EventParam {
  public readonly key = 'dates';
  public readonly value: string;

  constructor(startDate: Date, endDate: Date, isAllDay: boolean = false) {
    super();
    const formattedStartDate = DatesParam._formatToRFC5545(startDate);
    const formattedEndDate = DatesParam._formatToRFC5545(endDate);

    this.value = isAllDay
      ? `${DatesParam._toAllDay(formattedStartDate)}/${DatesParam._toAllDay(
          formattedEndDate
        )}`
      : `${formattedStartDate}/${formattedEndDate}`;
  }

  private static _toAllDay(formattedDate: string): string {
    return formattedDate.replace(/T.*$/, '');
  }

  private static _formatToRFC5545(date: Date): string {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  }

  public encoded(): string {
    return `${this.key}=${this.value}`;
  }
}
