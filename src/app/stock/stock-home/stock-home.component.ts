import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  displayedColumn: string[] = ['image', 'name', 'price', 'stock', 'action']
  dataSource = new MatTableDataSource<Product>() // จัดการเกียวกับ data table

  textSearch!: string

  // ผูกกับตัว MatSort ในหน้า html
  @ViewChild(MatSort, { static: true }) sort!: MatSort

  // bidding paginator
  @ViewChild(MatPaginator, { static: true }) pagiantor!: MatPaginator

  ngOnInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.pagiantor
    this.feedData()
  }

  feedData() {
    const dummy: Product[] = [
      {
        name: "Handcrafted Concrete Pants",
        stock: 1,
        price: 35000,
        image: 'https://media-cdn.bnn.in.th/94729/Apple-MacBook-Air-13-M1-chip8C-CPU-7C-GPU-8GB-256GB-Gold-2020-1.jpg'
      },
      {
        name: "mac book",
        stock: 1,
        price: 35000,
        image: 'https://media-cdn.bnn.in.th/94729/Apple-MacBook-Air-13-M1-chip8C-CPU-7C-GPU-8GB-256GB-Gold-2020-1.jpg'
      },
      {
        name: "mac book",
        stock: 344,
        price: 35000,
        image: 'https://media-cdn.bnn.in.th/94729/Apple-MacBook-Air-13-M1-chip8C-CPU-7C-GPU-8GB-256GB-Gold-2020-1.jpg'
      },
      {
        name: "mac book",
        stock: 1,
        price: 35000,
        image: 'https://media-cdn.bnn.in.th/94729/Apple-MacBook-Air-13-M1-chip8C-CPU-7C-GPU-8GB-256GB-Gold-2020-1.jpg'
      },
      {
        name: "mac book",
        stock: 100,
        price: 35000,
        image: 'https://media-cdn.bnn.in.th/94729/Apple-MacBook-Air-13-M1-chip8C-CPU-7C-GPU-8GB-256GB-Gold-2020-1.jpg'
      },
      {
        name: "mac book",
        stock: 344,
        price: 35000,
        image: 'https://media-cdn.bnn.in.th/94729/Apple-MacBook-Air-13-M1-chip8C-CPU-7C-GPU-8GB-256GB-Gold-2020-1.jpg'
      },
      {
        name: "mac book",
        stock: 1,
        price: 35000,
        image: 'https://media-cdn.bnn.in.th/94729/Apple-MacBook-Air-13-M1-chip8C-CPU-7C-GPU-8GB-256GB-Gold-2020-1.jpg'
      },
      {
        name: "mac book",
        stock: 100,
        price: 35000,
        image: 'https://media-cdn.bnn.in.th/94729/Apple-MacBook-Air-13-M1-chip8C-CPU-7C-GPU-8GB-256GB-Gold-2020-1.jpg'
      },
      {
        name: "mac book",
        stock: 344,
        price: 35000,
        image: 'https://media-cdn.bnn.in.th/94729/Apple-MacBook-Air-13-M1-chip8C-CPU-7C-GPU-8GB-256GB-Gold-2020-1.jpg'
      },
      {
        name: "mac book",
        stock: 1,
        price: 35000,
        image: 'https://media-cdn.bnn.in.th/94729/Apple-MacBook-Air-13-M1-chip8C-CPU-7C-GPU-8GB-256GB-Gold-2020-1.jpg'
      },
      {
        name: "mac book",
        stock: 100,
        price: 35000,
        image: 'https://media-cdn.bnn.in.th/94729/Apple-MacBook-Air-13-M1-chip8C-CPU-7C-GPU-8GB-256GB-Gold-2020-1.jpg'
      },
    ]
    this.dataSource.data = dummy
  }

  // search(event: Event)
  search(event: any) {
    let filterValue = ''
    // ถ้ามี event ให้ทำการแปลง event เป็น html element และนำค่าจาก input element ออกมาก
    if (event) {
      filterValue = (event.target as HTMLInputElement).value // ทำการ catch ตัวแปร input ให้เป็น html element
    }
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }

  clearSearch() {
    this.textSearch = ''
    this.search(null)
  }

}
