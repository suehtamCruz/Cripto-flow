import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  criptoFormControl = new FormControl();
  constructor(private service: HomeService) {}

  ngOnInit(): void {}

  getCoinDetails() {}
}
