import { EventParam } from './eventParam';

export class DetailsParam extends EventParam {
  public readonly key = 'details';
  public readonly value: string;

  constructor(details: string) {
    super();
    this.value = details;
  }

  public encoded(): string {
    return `${this.key}=${encodeURIComponent(this.value)}`;
  }
}
