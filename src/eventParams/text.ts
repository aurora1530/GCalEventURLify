import { EventParam } from './eventParam';

export class TextParam extends EventParam {
  public readonly key = 'text';
  public readonly value: string;

  constructor(text: string) {
    super();
    this.value = text;
  }

  public encoded(): string {
    return `${this.key}=${encodeURIComponent(this.value)}`;
  }
}
