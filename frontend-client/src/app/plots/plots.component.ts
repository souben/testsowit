import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

//import { ApiService } from '../api.service';
import { Plot } from '../plot';


@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent implements OnInit {

  plots$!: Observable<Plot[]>;
  //constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPlots();
  }

  public getPlots(){
    //this.plots$ = this.apiService.getPlots();
  }

}
