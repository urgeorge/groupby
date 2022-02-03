import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNewGroupComponent } from './find-new-group.component';

describe('FindNewGroupComponent', () => {
  let component: FindNewGroupComponent;
  let fixture: ComponentFixture<FindNewGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindNewGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindNewGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
