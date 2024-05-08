import { EventParam } from './eventParam';
import { dateToRFC5545, getObjectKeys } from '../utils';

export type RecurConf = {
  freq?: 'SECONDLY' | 'MINUTELY' | 'HOURLY' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
  interval?: number;
  until?: Date;
  count?: number;
};

export class RecurParam extends EventParam {
  public readonly key = 'recur';
  public readonly value: string;

  constructor(
    recurConf: RecurConf = {
      interval: 1,
    }
  ) {
    super();
    this.value = RecurParam._confToValue(recurConf);
  }

  private static _confToValue(conf: RecurConf): string {
    return getObjectKeys(conf)
      .flatMap((key) => {
        const keyStr = key.toUpperCase();
        const value = conf[key];
        if (value === undefined) return [];

        const valueStr = value instanceof Date ? dateToRFC5545(value) : value.toString();

        return `${keyStr}=${valueStr}`;
      })
      .join(';');
  }

  public encoded(): string {
    return `${this.key}=RRULE:${encodeURIComponent(this.value)}`;
  }
}
