import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { AnonymousSubject } from 'rxjs/internal/Subject';
@Injectable({
  providedIn: "root",
})
export class DataService {
  
   private barState = new BehaviorSubject<boolean>(true);
  currentBarState = this.barState.asObservable();
  
  private cameraState = new BehaviorSubject<boolean>(true);
  currentCameraState = this.cameraState.asObservable();


  constructor() { }

  changeMessage(state: boolean) {
    this.barState.next(state)
  }

  changeMessage2(state: boolean) {
    this.cameraState.next(state)
  }

 
}
