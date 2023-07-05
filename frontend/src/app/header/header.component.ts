import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  searchTerm='';
  constructor(activatedRoute: ActivatedRoute, private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm']) this.searchTerm=params['searchTerm'];
    })
  }
  ngOnInit(): void {
   
  }
  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+term);
  }
}
