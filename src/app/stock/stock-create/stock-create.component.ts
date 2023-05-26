import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent {
  imagePreview!: string | ArrayBuffer
  file!: File

  // Image preview
  onPreviewImage(e: any) {
    const metaImage = e.target.files[0]
    if (metaImage) {
      const reader = new FileReader();
      reader.readAsDataURL(metaImage)
      this.file = metaImage;
      reader.onload = () => {
        this.imagePreview = reader.result as ArrayBuffer | string
      }
    }
  }

  // submit Form
  onSubmit(productForm: NgForm) {
    const values = productForm.value;
    let product = new Product();

    // ถ้าไม่มี value เข้ามาก็ให้ return ออกไป
    if(productForm.invalid) {
      if (this.file == null) alert('กรุณาใส่กรอกข้อมูลให้ครบ')
      return;
    }
    
    product.name = values.name;
    product.price = values.price;
    product.stock = values.stock;
    product.image = this.file;

    // alert(JSON.stringify(values));
    console.log(product);
    
  }
}
