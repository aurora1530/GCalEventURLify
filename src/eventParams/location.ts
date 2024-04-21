import { EventParam } from './eventParam';

export class LocationParam extends EventParam {
  public readonly key = 'location';
  public readonly value: string;

  constructor(location: string) {
    super();
    this.value = location;
  }

  public encoded(): string {
    return `${this.key}=${encodeURIComponent(this.value)}`;
  }
}
