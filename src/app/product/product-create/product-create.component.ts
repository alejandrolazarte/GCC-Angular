import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Brand } from '../../domain/Brand';
import { BrandService } from '../../services/brand.service'
import { CreateProductCommand } from '../../domain/Product/create-product-command'
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  form: FormGroup;
  brands: Brand[] = [];
  isInvalid: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private brandService: BrandService,
    private location: Location,
    private productService: ProductService,
    private router: Router,
    private modalService: ModalService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      cost: ["", Validators.required],
      price: ["", Validators.required],
      brandId: ["", Validators.required]
    });

    this.getBrands();

  }

  private async getBrands(): Promise<void> {
    this.brands = await this.brandService.getAll();
  }


  get name() {
    return this.form.get('name');
  }

  get cost() {
    return this.form.get('cost');
  }

  get price() {
    return this.form.get('price');
  }

  get brandId() {
    return this.form.get('brandId');
  }

  public async onSubmit() {
    if (!this.form.valid) {
      this.isInvalid = true;
      return;
    } else {
      this.isInvalid = false;
    }

    const product = <CreateProductCommand>{
      name: this.name.value,
      cost: this.cost.value,
      price: this.price.value,
      brandId: +this.brandId.value
    };

    this.productService.create(product).then(() => {
      this.router.navigateByUrl("/product/list")
    }).catch((response) => {
      var errors = response.error.errors;
      this.modalService.displayAlert("Error", errors);
    });

  }

  public back() {
    this.location.back();
  }

}
