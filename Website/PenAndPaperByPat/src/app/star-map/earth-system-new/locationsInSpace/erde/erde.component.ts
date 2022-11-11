import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erde',
  templateUrl: './erde.component.html',
  styleUrls: ['./erde.component.css']
})
export class ErdeComponent implements OnInit
{

  constructor(private router: Router) { }

  ngOnInit(): void
  {
  }

  public changeBackgroundImage(imageUrl: string)
  {
    var container = document.getElementById("container");
    if (container != null)
    {
      container.style.backgroundImage = "url(" + imageUrl + ")";
    }

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

