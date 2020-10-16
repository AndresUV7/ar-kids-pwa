import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class DataService {
  private messageSource = new BehaviorSubject({
    cedula: "",
    contrasena: "",
  });
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message) {
    this.messageSource.next(message);
  }

  getMessage() {
    return this.messageSource.getValue();
  }

  private emitChangeSource = new Subject<any>();

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(data: {}) {
    this.emitChangeSource.next(data);
  }
}
