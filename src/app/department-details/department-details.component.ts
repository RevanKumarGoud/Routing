import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-department-details',
  template: `
<h3>You selected department with id = {{departmentId}}</h3>
<a (click)="gopervisous()">Pervisous</a>
<a (click)="gonext()">Next</a>
<div>
  <button (click)="ondepartment()">Back</button>
</div>
`,
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId:any;
  constructor(private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
   // let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.departmentId = id;
    })
  }

  gopervisous(){
let pervisousId = this.departmentId -1;
this.router.navigate(['/departments', pervisousId]);
  }
gonext(){
  let NextId = this.departmentId +1;
  this.router.navigate(['/departments', NextId]);
}
ondepartment(){
  let selectedId = this.departmentId ? this.departmentId : null;
  this.router.navigate(['/departments', {id: selectedId,test:'testvalue'}]);
}
}
