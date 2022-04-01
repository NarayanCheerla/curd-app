import { HttpBackend, HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BYPASS_LOG } from '../HttpInterceptors/log-interceptor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private handler: HttpBackend) { 
    // this.http = new HttpClient(this.handler);
  }

  private API_URL = "http://localhost:3000/productList/";
  postProduct(data: any) {
    return this.http.post<any>(this.API_URL, data);
  }

  getProduct(){
    return this.http.get<any>(this.API_URL, { context: new HttpContext().set(BYPASS_LOG, false) });
  }

  putProduct(data:any, id:number) {
    return this.http.put<any>(this.API_URL+id, data);
  }

  deleteProduct(id:number) {
    return this.http.delete<any>(this.API_URL+id);
  }
}
