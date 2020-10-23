import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerOverlayService {

  public isLoading = new BehaviorSubject(false);

  constructor() { }

  show(): void {
    this.isLoading.next(true);
  }

  hide(): void {
    this.isLoading.next(false);
  }

  // public readonly spinner$ = defer(() => {
  //   this.show();
  //   return NEVER.pipe(
  //     finalize(() => {
  //       this.hide();
  //     })
  //   );
  // }).pipe(share());
}
