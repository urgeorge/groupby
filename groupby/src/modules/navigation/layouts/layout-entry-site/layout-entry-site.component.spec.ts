import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEntrySiteComponent } from './layout-entry-site.component';

describe('LayoutEntrySite', () => {
  let component: LayoutEntrySiteComponent;
  let fixture: ComponentFixture<LayoutEntrySiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutEntrySiteComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutEntrySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
