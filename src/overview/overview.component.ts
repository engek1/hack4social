import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  template: `
  <h1>VBG Hack4Social APP</h1>

  <div *ngFor="let item of items">
  <button class="box" [routerLink]="['/category', item.name]" >

    <mat-icon aria-hidden="false" fontIcon="{{item.icon}}" size >
    </mat-icon>
    <span>{{item.name}}</span>
    <div>
  </div>
  `,
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  items: Item[] = [
    { name: 'Sprache', icon: 'language' },
    { name: 'Wohnen', icon: 'home' },
    { name: 'Gesundheit', icon: 'health_and_safety' },
    { name: 'Bildung & Schule', icon: 'school' },
    { name: 'Freizeit', icon: 'sports_esports' },
  ];

  constructor(readonly router: Router) {}

  ngOnInit() {}

  navigate(item): void {
   this.router.navigate([`/${item.url}`]);
  }
}
class Item {
  name: string
  icon: string
}
