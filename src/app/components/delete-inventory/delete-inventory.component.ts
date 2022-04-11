import { InventroyService } from './../../inventroy.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-inventory',
  templateUrl: './delete-inventory.component.html',
  styleUrls: ['./delete-inventory.component.scss']
})
export class DeleteInventoryComponent implements OnInit {
  data: any;

  constructor(private services:InventroyService, @Inject(MAT_DIALOG_DATA) public inputData: any,
    
  public dialogRef: MatDialogRef<DeleteInventoryComponent>,) { 

    this.data = this.inputData.data
    console.log('list',this.data);
  }

  ngOnInit(): void {
  }



  onCancel(){
    this.dialogRef.close();
  }

  DeleteData(){
    this.services.getDelete(this.data.id).subscribe((deletResponce:any)=>{
      this.dialogRef.close();

    console.log(deletResponce)
    })
  }
}
