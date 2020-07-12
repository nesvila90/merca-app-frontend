import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../@core/service/products.service';
import { Product } from '../../../@core/models/products.model';
import { LocalDataSource } from 'ng2-smart-table';
import { Category } from '../../../@core/models/category.models';


@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  products: Product[];
  category: Category[];

  listCom: any = this.getData();
  listCataAdd: any = this.getDataCategoryAdd();
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: ProductsService) { this.getProducts(); this.getData() }

  ngOnInit(): void {

  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },

    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      id: {
        title: 'Id',
        type: 'number',
      },
      name: {
        title: 'name',
        type: 'string'
      },
      description: {
        title: 'description',
        type: 'string'
      },
      price: {
        title: 'price',
        type: 'number'
      },
      categories: {
        title: 'categories',
        valuePrepareFunction: (categories) => { return categories.name },
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: this.listCataAdd,
          },
        },
        filter: {
          title: 'Category',
          type: 'list',
          config: {
            selectText: 'Select',
            list: this.listCom,
          }
        },
      },
      actions: //or something
      {
        title: 'Details',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<i (click)="onDetails()" class="ion-eye">'
        },
        filter: false,
        editable: false,
        addable: false,
      },
    },
  }


  getData() {
    var settingList: any = [];
    // Call API category 
    this.service.getCategory().subscribe((cat) => {
      this.category = cat;
      cat.forEach(obj => {
        settingList.push({ value: obj.categori_id, title: obj.name })
      });
      let newSettings = this.settings;
      newSettings.columns.categories.filter.config.list = settingList;
      this.settings = Object.assign({}, newSettings);
    });
  }

  getDataCategoryAdd() {
    var settingList: any = [];
    // Call API category 
    this.service.getCategory().subscribe((cat) => {
      this.category = cat;
      cat.forEach(obj => {
        settingList.push({ value: obj.categori_id, title: obj.name })
      });
      let newSettings = this.settings;
      newSettings.columns.categories.editor.config.list = settingList;
      this.settings = Object.assign({}, newSettings);
    });
  }

  onDetails() {
    console.log("entro a la prueba de dellates")
  }

  getProducts() {

    this.service.getProducts().subscribe(prod => {
      this.products = prod;
      this.source.load(this.products)
    })

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


  onSaveConfirm(event): void {
    if (window.confirm('Are you sure you want to save?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
