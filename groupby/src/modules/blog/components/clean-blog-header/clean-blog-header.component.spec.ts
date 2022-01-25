import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanBlogHeaderComponent } from './clean-blog-header.component';

describe('CleanBlogHeaderComponent', () => {
  let component: CleanBlogHeaderComponent;
  let fixture: ComponentFixture<CleanBlogHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanBlogHeaderComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanBlogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
