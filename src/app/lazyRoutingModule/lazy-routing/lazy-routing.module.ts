import { UpdateInventroryComponent } from './../../components/update-inventrory/update-inventrory.component';
import { DetailsInventoryComponent } from './../../components/details-inventory/details-inventory.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../../material/material.module';
import { InventroyComponent } from '../../components/inventroy/inventroy.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteInventoryComponent } from 'src/app/components/delete-inventory/delete-inventory.component';

const routes:Routes =[
  {
    path:"",component:InventroyComponent
  },
  {
    path:'inventoryView/:id',component:DetailsInventoryComponent
  }
]

@NgModule({
  declarations: [InventroyComponent,  DeleteInventoryComponent,
    DetailsInventoryComponent,UpdateInventroryComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    
  ],
  exports:[InventroyComponent,  DeleteInventoryComponent,
    DetailsInventoryComponent,UpdateInventroryComponent]
})
export class LazyRoutingModule { }
