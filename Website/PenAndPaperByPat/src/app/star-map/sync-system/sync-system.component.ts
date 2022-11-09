import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sync-system',
  templateUrl: './sync-system.component.html',
  styleUrls: ['./sync-system.component.css']
})
export class SyncSystemComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void
  {
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
