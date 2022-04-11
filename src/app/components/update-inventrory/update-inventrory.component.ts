import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InventroyService } from 'src/app/inventroy.service';

@Component({
  selector: 'app-update-inventrory',
  templateUrl: './update-inventrory.component.html',
  styleUrls: ['./update-inventrory.component.scss']
})
export class UpdateInventroryComponent implements OnInit {
  updateInventory!: FormGroup;
  submitted = false;

  test = [];
    verifyemail = false;

 UserData: any;
 members: any;
 data: any;
  teststdnew={
    
  }
  displayedColumns: string[] = ['id', 'name',  'email','description','price','actions'];
  
  dataSource : any[] = [];

  constructor(private service : InventroyService,  public dialog: MatDialog,private router:Router,
    public dialogRef: MatDialogRef<UpdateInventroryComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: any,){
   
      this.updateInventory = new FormGroup({
        id: new FormControl(''),
        name: new FormControl(''),
        email: new FormControl('', [Validators.required, Validators.email,
         Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
         
         description: new FormControl(''),
         price: new FormControl(''),
   
      });
      this.data = this.inputData.data;
  }

  ngOnInit() {
 console.log(  this.data.name)
    this.updateInventory.setValue({
    id: this.data.id, 
    name: this.data.name,
    email: this.data.email,
    description: this.data.description,
    price: this.data.price,
    })
 
  
  }
  
  submitForm(){
    var updateInventory = {
      "id": this.updateInventory.controls['id'].value,
       "name": this.updateInventory.controls['name'].value,
       "email": this.updateInventory.controls['email'].value,
       "description": this.updateInventory.controls['description'].value,
       "price": this.updateInventory.controls['price'].value,
     
     }
 
     this.service.updateInventorylist(updateInventory).subscribe((res: any) => {
    
          if (res) {
         this.dialogRef.close();
         console.log('Edit', res)
 
       }
 
     
     
     });
     
     
     //  newData = this.res;
     this.updateInventory.reset();
     this.dialogRef.afterClosed().subscribe((getRes) => {
      if(getRes){
     
       // let msg= "Details for " + this.editForm.f + " " + userData.lastName + " updated successfully."
      
      }
     });
 
 
  }
  
 
  
  loadData() {
      this.service.getData().subscribe((data:any) => {
        debugger
        this.dataSource = data;
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
  
  

  
 
}
