import { InventroyService } from './../../inventroy.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-inventory',
  templateUrl: './details-inventory.component.html',
  styleUrls: ['./details-inventory.component.scss']
})
export class DetailsInventoryComponent implements OnInit {

  seletcedData: any;
  currentURL: any;
  params: any;
  dataSource: any;

  constructor(private router: Router,
              private route: ActivatedRoute,private service : InventroyService, ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.seletcedData = params.get('id');
    });

    this.loadData()

  }

    loadData() {
      this.service.getData().subscribe((data:any) => {
        debugger
        this.dataSource = data;
    });
    }
  
    backTo(){
      this.router.navigate(['/']);
      this.loadData();
  }

}
