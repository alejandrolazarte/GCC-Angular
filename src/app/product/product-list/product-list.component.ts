import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/Product';
import { ProductService } from '../../services/product.service'
import { ModalService } from '../../services/modal.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products : Product[] = [];
  searchTerm: string = '';

  constructor(private productService : ProductService,
    private modalService: ModalService,
    private router: Router ) { }

  async ngOnInit() : Promise<void> {
    await this.loadProducts()    
  }

  public async delete(id:number){
    this.modalService.displayAlert("Eliminar", ['Esta seguro que desea eliminar el producto'],
    async () => { 
      await this.deleteProduct(id) 
    } , () => {} , true);
  }

  public async deleteProduct(id: number) {
      await this.productService.delete(id);
      await this.loadProducts();
  }

  public async loadProducts() {
    this.products = await this.productService.getAll(this.searchTerm);
  }

  public clearFilter() : void {
    this.searchTerm = '';
  }

  public navigateToEdit(id:number) : void {
    this.router.navigateByUrl(`/product/update/${id}`);
  }
}
