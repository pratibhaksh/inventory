import { DeleteInventoryComponent } from './../delete-inventory/delete-inventory.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InventroyService } from 'src/app/inventroy.service';
import { UpdateInventroryComponent } from '../update-inventrory/update-inventrory.component';

@Component({
  selector: 'app-inventroy',
  templateUrl: './inventroy.component.html',
  styleUrls: ['./inventroy.component.scss']
})
export class InventroyComponent implements OnInit {

   //  @ViewChild(NgForm) form: NgForm;
 @Output() passData = new EventEmitter<any>();
 submitted = false;
 cxForm=''
 test = [];
   verifyemail = false;
addInventory: FormGroup;
 teststdnew={
   
 }
 displayedColumns: string[] = ['id', 'name',  'email','description','price','actions'];
 
 dataSource : any[] = [];
 UserData: any;

 constructor(private service : InventroyService,  public dialog: MatDialog,private router:Router){
   this.addInventory = new FormGroup({
     name: new FormControl(''),
     email: new FormControl('', [Validators.required, Validators.email,
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      
      description: new FormControl(''),
      price: new FormControl(''),




   });
 }

 ngOnInit() {
   this.loadData()
 }
 
 submitForm(addInventory:any){

  this.service.makeData(addInventory).subscribe((postData: any) => {
    console.log(postData);
    this.loadData();
  })   


 }
 

 
 loadData() {
     this.service.getData().subscribe((data:any) => {
       debugger
       this.dataSource = data;
   });
 }
 goToDeleteInvetory(id:any){


  const dialogRef = this.dialog.open(DeleteInventoryComponent, {
    height: 'auto',
    width: '485px',
    data: {
      data: id,
    }
  });

  dialogRef.afterClosed().subscribe(() => {
    this.loadData();
  });


 }
 onKey(event: any) { // without type info
   this.verifyemail = false;
 this.service.getData().subscribe((myData: any) => {
   this.UserData = myData;
   var self = this;
   this.UserData.forEach(function (value:any) {
     if(event.target.value == value.email){
       self.verifyemail = true;
      
     }
     else{
       // console.log(value.email);
     }
    
   }); 
   

 })
 }
 
 
 gotoView(id: any) {
   
   this.router.navigate(['/inventoryView',id])
 }
 
 goToEditInventory(data: any) {
  const dialogRef = this.dialog.open(UpdateInventroryComponent, {
     data: {
       data: data,
     },
   });
   dialogRef.afterClosed().subscribe(() => {
     this.loadData();
   });
 }

}
