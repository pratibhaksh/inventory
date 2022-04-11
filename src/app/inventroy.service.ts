import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventroyService {

 
  url = "http://localhost:3000/inventory/"; //4201

  
  constructor(private http: HttpClient) {
    console.log(this.url)
  }

  getData():Observable<any>{
return this.http.get<any>(this.url)
  }

  makeData(newpost:any): Observable<any> {
    return this.http.post(this.url, newpost)
  }

  getDelete(id:any): Observable<any> {

    return this.http.delete(this.url + id)

  }

  updateInventorylist(data:any): Observable<any> {
    
        return this.http.put(this.url+data.id,data)
    
      }
}
