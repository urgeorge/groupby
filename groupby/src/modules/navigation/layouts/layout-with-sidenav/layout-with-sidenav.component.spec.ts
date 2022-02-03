import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithSidenavComponent } from './layout-with-sidenav.component';

describe('LayoutWithSidenav', () => {
  let component: LayoutWithSidenavComponent;
  let fixture: ComponentFixture<LayoutWithSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutWithSidenavComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWithSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
