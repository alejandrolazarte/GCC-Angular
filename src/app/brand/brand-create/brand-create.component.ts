import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateBrandCommand } from 'src/app/domain/Brand';
import { BrandService } from 'src/app/services/brand.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.scss']
})
export class BrandCreateComponent implements OnInit {

  form: FormGroup;
  isInvalid: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private location: Location,
    private brandService: BrandService,
    private modalService: ModalService,
    private router: Router) { }


  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ["", Validators.required]
    });

  }

  get name() {
    return this.form.get('name');
  }

  public async onSubmit() {
    if (!this.form.valid) {
      this.isInvalid = true;
      return;
    } else {
      this.isInvalid = false;
    }

    const brand = <CreateBrandCommand>{
      name: this.name.value
    };

    this.brandService.create(brand).then(() => {
      this.router.navigateByUrl("/brand/list")
    }).catch((response) => {
      var errors = response.error.errors;
      this.modalService.displayAlert("Error", errors);
    });

  }

  public back() {
    this.location.back();
  }

}
