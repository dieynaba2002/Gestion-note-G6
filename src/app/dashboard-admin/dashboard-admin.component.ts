import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit{
count:number=0
countProf:number=0
tabAdmin:any
tabEleve:[]=[]
tabProfs:[]=[]

  ngOnInit() {
    this.iEleve()
    this.iProf()
  
  }

  // creation de notre tableau d'objet
  
  // dynamiser les cartes du dashboard

  iEleve( ){
    this.tabAdmin=JSON.parse(localStorage.getItem("admin")!)
    this.tabEleve=this.tabAdmin[0].apprenants
    this.count= this.tabEleve.length

  }
  iProf( ){
    this.tabAdmin=JSON.parse(localStorage.getItem("admin")!)
    this.tabProfs=this.tabAdmin[0].profs
    this.countProf= this.tabProfs.length

  }

  showAlert(title:any, text:any, icon:any){
    Swal.fire({
      title:title,
      text:text,
      icon:icon
    })
  }
}
