import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isloggedIn: boolean=false;
 maile:string='alfredo.amador@me.com';
 pass:string='alfred123';
  
  login(email:string,password:string): boolean{



      if(email==this.maile && password==this.pass){
      this.isloggedIn=true;
        
      
       }else{
       this.isloggedIn=false   
       alert("Usuario o Contraseña Incorrecta");
      }
      return this.isloggedIn;    
      }
    

      isUserLoggedIn(){
          return this.isloggedIn;
      }
isUserLoggedIne(){

}
  
}
