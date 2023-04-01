import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, HomeRoutingModule],
  providers: [HomeService],
})
export class HomeModule {}
