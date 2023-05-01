import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CafesComponent } from './cafes.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from './cafe.service';
import { of } from 'rxjs';
import { Cafe } from './cafe';
import { AppComponent } from '../app.component';
import { CafesModule } from './cafes.module';

describe('CafesComponent, AppComponent', () => {

  let component: CafesComponent;
  let fixture: ComponentFixture<CafesComponent>;
  let cafeService: CafeService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientModule, CafesModule
      ],
      declarations: [
        CafesComponent,
        AppComponent
      ],
      providers: [CafeService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafesComponent);
    component = fixture.componentInstance;
    cafeService = TestBed.inject(CafeService);
    fixture.detectChanges();
  });

  it('should display a table with three rows', () => {
    const cafes: Cafe[] = [
      {id:1, nombre:'Café 1', tipo: 'Blend', region: 'Antioquia', sabor: 'Sabor1', altura: 1000},
      {id:2, nombre:'Café 2', tipo: 'Blend', region: 'Caldas', sabor: 'Sabor2', altura: 2000},
      {id:3, nombre:'Café 3', tipo: 'Origen', region: 'Antioquia', sabor: 'Sabor3', altura: 3000}
    ];
    spyOn(cafeService, 'getCafes').and.returnValue(of(cafes));
    component.ngOnInit();
    fixture.detectChanges();
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(4)
  });
});
