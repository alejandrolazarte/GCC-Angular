import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand, CreateBrandCommand } from '../domain/Brand'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  readonly urlApi = `${environment.urlApi}/brands`;

  constructor(private http: HttpClient) { }

  public async getAll(search: string = ''): Promise<Brand[]> {
    debugger
    return await this.http.get<Brand[]>(`${this.urlApi}/all/${search}`).toPromise();
  }

  public async create(command: CreateBrandCommand) {
    return await this.http.post(`${this.urlApi}`, command).toPromise();
  }

  public async delete(id: number) {
    return await this.http.delete(`${this.urlApi}/${id}`).toPromise();
  }

}
