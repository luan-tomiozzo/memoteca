import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPensagmentoComponent } from './criar-pensagmento.component';

describe('CriarPensagmentoComponent', () => {
  let component: CriarPensagmentoComponent;
  let fixture: ComponentFixture<CriarPensagmentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPensagmentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPensagmentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
