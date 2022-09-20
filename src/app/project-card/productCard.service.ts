import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import { productCardComponent } from "./productCard.component";
import { product } from "./product";

@Injectable()
export class productCardservice{
    private apiUrl:string = 'http://localhost:3000/animals'
    
    constructor(private http:HttpClient){}

    getProducts(): Observable<product[]>{
        return this.http.get<product[]>(this.apiUrl)
    }
}