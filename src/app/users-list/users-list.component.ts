import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { UsersService } from '../services/usuarios/users.service';
import { Persona } from '../models/Persona';
import { MatCheckboxChange } from '@angular/material/checkbox';


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-users-list',
  styleUrls: ['./users-list.component.css'],
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit{
  displayedColumns: string[] = ['select','cedula', 'nombre', 'apellido', 'sexo', 'fecha_nacimiento', 'estado'];
  dataSource =  new MatTableDataSource<Persona>();
  selection = new SelectionModel<Persona>(true, []);
  deleteBtn = false;
  eliminacionRef;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true } ) sort: MatSort;
  

  constructor(private dialog: MatDialog, public userService: UsersService) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
    
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
 

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  ngOnInit(){
    this.paginator._intl.itemsPerPageLabel="Usuarios por página";

    this.userService.selectPersonas().subscribe(res =>{
      
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
    

    })


  }



  openDialog(row: any) {
 
    
     this.dialog.open(EditUserComponent, {
      width: "420px",
      data: JSON.parse(JSON.stringify(row)),
      disableClose: true,
      
      
    }).afterClosed().subscribe(result => {
      console.log(result);
      if (result){
        
        this.editarUsuario(result);
      }
    });
    
  }
  
  nuevoUsuario() {
  

    this.dialog.open(EditUserComponent, {
      width: "420px",
      data: {},
      disableClose: true,
      
    }).afterClosed().subscribe(result => {
      if (result){
        
        this.guardarUsuario(result);
      }
        
    });
  }

  yearsDiff(d1) {
    let date1 = new Date(d1);
    let date2 = new Date();
    let yearsDiff =  date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
  }

  showOptions(row) {
    
    let marcado = false;

    this.selection.toggle(row);
    
    this.dataSource.data.forEach(row1 => {
      if (this.selection.isSelected(row1)){
        console.log("aqui")
        marcado = true;
      }
    
    })
    if (marcado){
    this.deleteBtn =true;
      
    }else{
    this.deleteBtn =false;
    
    }
    
  }

  guardarUsuario(result){
    this.userService.insertPersona(result).subscribe(res =>{
      console.log(res);
      this.userService.selectPersonas().subscribe(res =>{
        console.log("1111 adhaodho")
        this.dataSource.data = res;
     
 
     })
      
    });
  }
  
  editarUsuario(result){
    this.userService.updatePersona(result).subscribe(res =>{
      console.log(res);
      this.userService.selectPersonas().subscribe(res =>{
        this.dataSource.data = res;

 
     })
      
    });
  }

  eliminar(){

    this.dataSource.data.forEach(row1 => {
      if (this.selection.isSelected(row1)){
        
        this.userService.deletePersona(row1).subscribe(res =>{
          console.log(res);
          this.userService.selectPersonas().subscribe(res =>{
            this.dataSource.data = res;
     
         })
          
        });
      }
    
    })

    this.deleteBtn = false;
    
  }
}




/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */