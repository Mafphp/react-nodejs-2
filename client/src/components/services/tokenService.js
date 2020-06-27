import { Subject } from "rxjs";

const subject = new Subject();

export const tokenService = {
  setToken: (token) => subject.next(token),
  clearToken: () => subject.next(),
  getToken: () => subject.asObservable(),
};
