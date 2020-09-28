import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Brand } from '../../domain/Brand';
import { BrandService } from '../../services/brand.service'

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  brands: Brand[] = []
  searchTerm: string = ''

  constructor(private brandService: BrandService,
    private modalService: ModalService) { }

  async ngOnInit() {
    await this.loadBrands();
  }

  public async loadBrands() {
    this.brands = await this.brandService.getAll(this.searchTerm);
  }

  public async delete(id:number){
    this.modalService.displayAlert("Eliminar", ['Esta seguro que desea eliminar el producto'],
    async () => { 
      await this.deleteBrand(id) 
    } , () => {} , true);
  }

  public async deleteBrand(id: number){
    await this.brandService.delete(id);
    await this.loadBrands();
  }

  public clearFilter() {
    this.searchTerm = '';
  }
}
