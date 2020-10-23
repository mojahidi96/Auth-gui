import { Component, OnInit } from '@angular/core';
import { SpinnerOverlayService } from 'src/app/services/spinner-overlay.service';

@Component({
  selector: 'spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: []
})
export class SpinnerComponent implements OnInit {

  loading: boolean;

  constructor(private spinnerOverlayService: SpinnerOverlayService) { }

  ngOnInit(): void {
    this.spinnerOverlayService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }

}
