import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  styleUrls: ['./category.component.css'],
  template: `
  <p>
    {{name}}
  </p>
  `,
})
export class CategoryComponent implements OnInit {

  name: string

  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name')
  }

  ngOnInit() {}
}
