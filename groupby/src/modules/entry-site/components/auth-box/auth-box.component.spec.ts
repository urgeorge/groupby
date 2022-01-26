import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBoxComponent } from './auth-box.component';

describe('AuthBoxComponent', () => {
  let component: AuthBoxComponent;
  let fixture: ComponentFixture<AuthBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthBoxComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
