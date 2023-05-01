import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { CafeService } from './cafe.service';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {

  cafes: Array<Cafe> = [];
  origen: number = 0;
  blend: number = 0;
  constructor(private cafeService: CafeService) { }

  getCafes(){
    this.cafeService.getCafes().subscribe(cafes => {
      this.cafes = cafes;

      this.cafes.forEach(cafe => {
        if(cafe.tipo == 'Blend'){
          this.blend += 1;
        } else {
          this.origen += 1;
        }
      })
    })
  }

  ngOnInit() {
    this.getCafes();
  }

}
