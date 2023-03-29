import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProgramUiComponent } from './main-program-ui.component';

describe('MainProgramUiComponent', () => {
  let component: MainProgramUiComponent;
  let fixture: ComponentFixture<MainProgramUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProgramUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProgramUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
