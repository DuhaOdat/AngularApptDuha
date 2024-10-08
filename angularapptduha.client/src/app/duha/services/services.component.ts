import { Component } from '@angular/core';
import { DuhaUrlService } from '../duha-url.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {


  ngOnInit() {

  }


  constructor(private _ser: DuhaUrlService) {

  }
  arrayServices:any
  GetServices() {
    this._ser.getServives().subscribe((data) => {
      this.arrayServices = data


    }
    )
  }
}
