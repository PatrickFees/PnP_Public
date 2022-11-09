import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit
{

  //<img src="assets/img/backgrounds/MainPageBackground.jpg" width="">
  constructor(private router: Router) 
  {

  }

  ngOnInit(): void
  {
  }

  public navigate(page: string)
  {
    this.router.navigateByUrl('/' + page);
  }

}
