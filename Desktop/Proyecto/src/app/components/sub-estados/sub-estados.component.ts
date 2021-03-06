import { Component, OnInit } from '@angular/core';
import {PeriodicElement} from '../interfaces/periodic-element';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource,MatDialog} from '@angular/material';
export interface PeriodicElement {
  descripcion: string;
  codigo: number;
}

@Component({
  selector: 'app-sub-estados',
  templateUrl: './sub-estados.component.html',
  styleUrls: ['./sub-estados.component.scss']
})
export class SubEstadosComponent implements OnInit {
  displayedColumnss = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  numero: number;
  descripcion: string;

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  title = 'Agregar';
  selectedValue: string = "";

 

  ngOnInit() {
  }

  constructor(public dialog: MatDialog) { }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  
openDialog1():void{ ///AGREGAR
  const dialogRef = this.dialog.open(agregarSubEstados,{
    width: '650px',
    height: '530px',
    data: {numero: this.numero, descripcion: this.descripcion,}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.numero = result;
  });
}

}

@Component({ //Agregar

  selector: 'app-sub-estados',
  templateUrl: './agregarSubEstados.html',
  styleUrls:['./sub-estados.component.scss']

})
export class agregarSubEstados implements OnInit {
  checked = false;
  indeterminate = false;
  disabled = false;


  constructor(){}
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  selectedValue: string = "";
  dataSource = ELEMENT_DATA;

  ngOnInit(){

  }
}



const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, descripcion: 'Hydrogen'},
  {codigo: 2, descripcion: 'Helium'},
  {codigo: 3, descripcion: 'Lithium'},
  {codigo: 4, descripcion: 'Beryllium'},
  {codigo: 5, descripcion: 'Boron'},
];