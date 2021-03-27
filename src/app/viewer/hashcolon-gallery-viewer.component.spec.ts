import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashcolonGalleryViewerComponent } from './hashcolon-gallery-viewer.component';

describe('HashcolonGalleryViewerComponent', () => {
  let component: HashcolonGalleryViewerComponent;
  let fixture: ComponentFixture<HashcolonGalleryViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashcolonGalleryViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashcolonGalleryViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
