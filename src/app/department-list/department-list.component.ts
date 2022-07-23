import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      department-list works!
</h3>
<ul class="items">
  <li (click)="onSelect(department)" [class.selected]="isSelected(department)"  *ngFor="let department of departments">
<span class="items">{{department.id}}</span>{{department.name}}
  </li>
</ul>

  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {
  public selectId:any;
departments = [
  {"id":1,"name":'Angular'},
  {"id":2,"name": 'Html'},
  {"id":3, "name": 'Css'},
  {"id":4, "name": 'Javascript'},
  {"id":5, "name": "Nodejs"}
]
  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.selectId = id;
    })

  }

  onSelect(_department: any) {
this.router.navigate(['/departments', _department.id])
  }

  isSelected(department: { id: any; }){
    return department.id ==this.selectId;
  }
}
