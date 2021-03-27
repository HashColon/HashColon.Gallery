import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@Gallery/material.module';
import { HashcolonGalleryViewerComponent } from '@Gallery/viewer/hashcolon-gallery-viewer.component';



@NgModule({
  declarations: [HashcolonGalleryViewerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class GalleryModule { }
