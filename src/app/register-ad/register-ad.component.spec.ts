import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterADComponent } from './register-ad.component';

describe('RegisterADComponent', () => {
  let component: RegisterADComponent;
  let fixture: ComponentFixture<RegisterADComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterADComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
