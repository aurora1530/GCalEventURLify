import { EventParam } from './eventParams/eventParam';

type Params = Readonly<{
  [key: string]: EventParam;
}>;

export class EventURL {
  private static readonly _rootURL = `https://calendar.google.com/calendar/u/0/r/eventedit`;

  private constructor(private readonly _params: Params = {}) {}

  public static createWithParams(params?: Params): EventURL {
    return new EventURL(params);
  }

  public setParam(param: EventParam): EventURL {
    return EventURL.createWithParams({ ...this._params, [param.key]: param });
  }

  public generateURL(): string {
    if (Object.keys(this._params).length === 0) return EventURL._rootURL;

    const params = Object.values(this._params).map((param) => param.encoded());
    return `${EventURL._rootURL}?${params.join('&')}`;
  }
}
