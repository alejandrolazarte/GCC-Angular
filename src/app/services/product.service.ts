import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateProductCommand, Product, UpdateProductCommand } from '../domain/Product';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly urlApi = `${environment.urlApi}/products`;

  constructor(private http: HttpClient) { }

  public async getAll(search: string = ''): Promise<Product[]> {
    return await this.http.get<Product[]>(`${this.urlApi}/all/${search}`).toPromise();
  }

  public async getbyId(id: number): Promise<Product> {
    return await this.http.get<Product>(`${this.urlApi}/${id}/`).toPromise();
  }

  public async create(command: CreateProductCommand): Promise<number> {
    return await this.http.post<number>(`${this.urlApi}`, command ).toPromise();
  }

  public async update(id: number,command: UpdateProductCommand): Promise<number> {
    return await this.http.put<number>(`${this.urlApi}/${id}`, command ).toPromise();
  }

  public async delete(id: number): Promise<number> {
    return await this.http.delete<number>(`${this.urlApi}/${id}`).toPromise();
  }
  
}
