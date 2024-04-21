export abstract class EventParam {
  abstract readonly key: string;
  abstract readonly value: string;

  abstract encoded(): string;
}
