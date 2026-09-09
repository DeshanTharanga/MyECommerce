import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sellings } from './sellings';

describe('Sellings', () => {
  let component: Sellings;
  let fixture: ComponentFixture<Sellings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sellings],
    }).compileComponents();

    fixture = TestBed.createComponent(Sellings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
