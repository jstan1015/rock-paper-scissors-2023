import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProgramContainerComponent } from './main-program-container.component';

describe('MainProgramContainerComponent', () => {
  let component: MainProgramContainerComponent;
  let fixture: ComponentFixture<MainProgramContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProgramContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProgramContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
