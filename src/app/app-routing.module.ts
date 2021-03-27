import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashcolonGalleryViewerComponent } from '@Gallery/viewer/hashcolon-gallery-viewer.component';

const routes: Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: 'gallery', component: HashcolonGalleryViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
