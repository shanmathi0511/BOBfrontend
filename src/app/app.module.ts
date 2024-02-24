import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { MessageBoxComponent } from '../message-box/message-box.component';
import { OtherComponentsComponent } from '../other-components/other-components.component';

@NgModule({
  declarations: [
    HomeComponent,
    ImageGalleryComponent,
    SearchBarComponent,
    MessageBoxComponent,
    OtherComponentsComponent
  ],
  imports: [
    CommonModule
  ],
})
export class HomeModule { }
