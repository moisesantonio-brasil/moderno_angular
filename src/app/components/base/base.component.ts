import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
c1:boolean =true; part01:boolean =true;
c2:boolean =false;part02:boolean = true;
c3:boolean =true;part03:boolean = true;
c4:boolean =false;part04:boolean = true;
c5:boolean =true;part05:boolean = true;
c6:boolean =false;part06:boolean = true;
c7:boolean =true;part07:boolean = true;
c8:boolean =false;part08:boolean = true;
c9:boolean =true;part09:boolean = true;
c10:boolean =false;part10:boolean = true;
c11:boolean =true;
c12:boolean =false;
c13:boolean =true;
c14:boolean =false;
c15:boolean =true;
c16:boolean =false;
c17:boolean =true;
c18:boolean =false;
c19:boolean =true;
c20:boolean =false;


curtir():void{
    this.c1 = !this.c1
    this.c2 = !this.c2
}
curtir2():void{
  this.c3 = !this.c3
  this.c4 = !this.c4

}
curtir3():void{
  this.c5 = !this.c5
  this.c6 = !this.c6
}
curtir4():void{
this.c7 = !this.c7
this.c8 = !this.c8

}
curtir5():void{
  this.c9 = !this.c9
  this.c10 = !this.c10
  
  }
  curtir6():void{
    this.c11 = !this.c11
    this.c12 = !this.c12
    
    }
    curtir7():void{
      this.c13 = !this.c13
      this.c14 = !this.c14
      
      }
      curtir8():void{
        this.c15 = !this.c15
        this.c16 = !this.c16
        
        }
        curtir9():void{
          this.c17 = !this.c17
          this.c18 = !this.c18
          
          }
          curtir10():void{
            this.c19 = !this.c19
            this.c20 = !this.c20
            
            }

  b1():void{
this.part01 = true;this.part06 = false;
this.part02 = false;this.part07 = false;
this.part03 = false;this.part08 = false;
this.part04 = false;this.part09 = false;
this.part05 = true;this.part10 = true;

this.c1 = false; this.c2 = true;
this.c9 = false; this.c10 = true;
this.c19 = false; this.c20 = true;
  }
  b2():void{
    this.part01 = false;this.part06 = false;
    this.part02 = true;this.part07 = true;
    this.part03 = false;this.part08 = false;
    this.part04 = false;this.part09 = false;
    this.part05 = false;this.part10 = false;

    this.c3 = false; this.c4 = true;
    this.c13 = false; this.c14 = true;
  }
  b3():void{
    this.part01 = false;this.part06 = false;
    this.part02 = false;this.part07 = false;
    this.part03 = true;this.part08 = false;
    this.part04 = false;this.part09 = false;
    this.part05 = false;this.part10 = false;

    this.c5 = false; this.c6 = true;
  }
  b4():void{
    this.part01 = false;this.part06 = false;
    this.part02 = false;this.part07 = false;
    this.part03 = false;this.part08 = false;
    this.part04 = true;this.part09 = false;
    this.part05 = false;this.part10 = false;

    this.c7 = false; this.c8 = true;
  }
  b5():void{
    this.part01 = false;this.part06 = false;
    this.part02 = false;this.part07 = false;
    this.part03 = false;this.part08 = false;
    this.part04 = false;this.part09 = false;
    this.part05 = true;this.part10 = false;

    this.c9 = false; this.c10 = true;
  }
  b6():void{
    this.part01 = false;this.part06 = true;
    this.part02 = false;this.part07 = false;
    this.part03 = false;this.part08 = false;
    this.part04 = false;this.part09 = false;
    this.part05 = false;this.part10 = false;

    this.c11 = false; this.c12 = true;
  }
  b7():void{
    this.part01 = false;this.part06 = false;
    this.part02 = false;this.part07 = false;
    this.part03 = false;this.part08 = true;
    this.part04 = false;this.part09 = true;
    this.part05 = false;this.part10 = false;

    this.c15 = false; this.c16 = true;
  }
  b8():void{
    this.part01 = true;this.part06 = false;
    this.part02 = true;this.part07 = true;
    this.part03 = false;this.part08 = true;
    this.part04 = false;this.part09 = true;
    this.part05 = false;this.part10 = true;

    this.c1= false; this.c2 = true;
    this.c3= false;  this.c4 = true;
    this.c13= false;  this.c14 = true;
    this.c15= false;  this.c16 = true;
    this.c17= false;  this.c18 = true;
    this.c19= false;  this.c20 = true;
  }
  b9():void{
    this.part01 = false;this.part06 = true;
    this.part02 = false;this.part07 = false;
    this.part03 = true;this.part08 = false;
    this.part04 = true;this.part09 = false;
    this.part05 = true;this.part10 = false;

    this.c5 = false; this.c6 = true;
    this.c7 = false; this.c8 = true;
    this.c9 = false; this.c10 = true;
    this.c11 = false; this.c12 = true;
  }
  b10():void{
    this.part01 = true;this.part06 = true;
    this.part02 = true;this.part07 = true;
    this.part03 = true;this.part08 = true;
    this.part04 = true;this.part09 = true;
    this.part05 = true;this.part10 = true;

this.c1 =true; this.c10 =false;
this.c2 =false;this.c11 =true;
this.c3 =true;this.c12 =false;
this.c4 =false;this.c13 =true;
this.c5 =true;this.c14 =false;
this.c6 =false;this.c15 =true;
this.c7 =true;this.c16 =false;
this.c8 =false;this.c17 =true;
this.c9 =true;this.c18 =false;
this.c19 =true;this.c20 =false;
  }
  
}
