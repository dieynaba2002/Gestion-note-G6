import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-apprenant',
  templateUrl: './gestion-apprenant.component.html',
  styleUrls: ['./gestion-apprenant.component.css']
})
export class GestionApprenantComponent implements OnInit{

  apprenants:any[]=[]

  nom:string='';
  annee:string='';
  prenom:string='';
  classe:string='';
  email:string='';
  adresse: string = '';
  dateNaiss: string = '';
  role:string='';
  telephone:string='';
  etat:string="active";

 
 idLastApprenant:number=0;

 profRecup:any;

 filterValue:any;
 textButton:string='';
 ngOnInit() {
   if (!localStorage.getItem('apprenants')) {
     localStorage.setItem('apprenants', JSON.stringify(this.apprenants));
   }
   this.profRecup=JSON.parse(localStorage.getItem('apprenants') || '[]')
   console.log(this.profRecup)
   
   if(this.profRecup.length !=0){
     this.idLastApprenant=this.profRecup[this.profRecup.length-1].idProf
   }
   

 }

 // vider champs
 viderChamps(){
   this.adresse='';
   this.nom='';
   this.annee='';
   this.telephone='';
   this.prenom=''; 
   this.classe=''; 
   this.email = ''; 
   this.role = '';
 }

 // methode pour ajouter profuation
 ajouterprof(){
   if(this.adresse=='' || this.nom==''|| this.annee=='' || this.prenom=='' || this.telephone=='' || this.email==''){
     this.showAlert('Oups', 'veuillez renseigner tous les champs', 'error')
   }else{
     
     let Prof={
       idProf: this.idLastApprenant +1,
       adresse:this.adresse,
       nom:this.nom,
       annee: this.annee,
       classe: this.classe,
       prenom:this.prenom,
       email:this.email,
       telephone: this.telephone,
       dateNaiss: this.dateNaiss,
       role: this.role,
       etat:'active'
     }
     console.log(Prof);
     this.profRecup.push(Prof);
     localStorage.setItem('apprenants', JSON.stringify(this.profRecup))
     console.log(this.profRecup)


   }
   this.viderChamps()
 }






 showAlert(title:any, text:any, icon:any){
   Swal.fire({
     title:title,
     text:text,
     icon:icon
   })
 }
// profChoisi:any;
// // recupere l'objet
// recup(paramProf: any){
//   this.profChoisi=paramProf;

// }
// // methode pour changer le texte du bouton
//  desactiverProf(){
//   this.profChoisi.etat='desactive'
//   localStorage.setItem('apprenants', JSON.stringify(this.profRecup))
//  }
//  activerProf(){
//   this.profChoisi.etat='active'
//   localStorage.setItem('profs', JSON.stringify(this.profRecup))
//  }

toggleEtat(prof: any) {
  prof.etat = (prof.etat === 'active') ? 'inactive' : 'active';
  // Vous pouvez ajouter ici la logique pour mettre à jour l'état du professeur dans votre base de données ou tout autre traitement nécessaire
}

}
