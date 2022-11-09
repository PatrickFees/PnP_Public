import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-satta',
  templateUrl: './satta.component.html',
  styleUrls: ['./satta.component.css']
})
export class SattaComponent implements OnInit
{

  constructor(private router: Router) { }

  ngOnInit(): void
  {
  }
  public navigate(page: string)
  {
    this.router.navigateByUrl('/' + page);
  }
  top: any;
  left: any;
  expand = false;

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: { pageY: number; pageX: number; })
  {
    this.top = ($event.pageY - 10) + "px";
    this.left = ($event.pageX - 10) + "px";
  }


}
