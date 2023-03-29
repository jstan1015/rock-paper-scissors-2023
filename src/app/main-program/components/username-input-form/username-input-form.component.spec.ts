import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameInputFormComponent } from './username-input-form.component';

describe('UsernameInputFormComponent', () => {
  let component: UsernameInputFormComponent;
  let fixture: ComponentFixture<UsernameInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameInputFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
