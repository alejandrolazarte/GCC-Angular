import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product, UpdateProductCommand } from '../../domain/Product/';
import { Location } from '@angular/common';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/domain/Brand';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  form: FormGroup;
  product: Product;
  productId: number;
  isInvalid: boolean = false;
  brands : Brand[]

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private brandService: BrandService,
    private router: Router,
    private modalService: ModalService) { }


  async ngOnInit() {

    this.route.params.subscribe((params) => {
      this.productId = +params["id"];
    });

    this.product = await this.productService.getbyId(this.productId);
    
    this.getBrands();

    this.form = this.formBuilder.group({
      name: [this.product.name, Validators.required],
      cost: [this.product.cost, Validators.required],
      price: [this.product.price, Validators.required],
      brandId: [this.product.brandId, Validators.required]
    });

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

    const product = <UpdateProductCommand>{
      id: this.productId,
      name: this.name.value,
      cost: this.cost.value,
      price: this.price.value,
      brandId: +this.brandId.value
    };

    this.productService.update(this.productId,product).then(() => {
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
