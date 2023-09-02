import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})
export class CardComponent implements OnInit {

  
  form : boolean = false;
  flip : boolean = false;
  svgRotate : boolean = false

  values! : any

  cardNum    : string  
  fullName   : string     
  expMonth   : number   | string  
  expYear    : number[] | string  
  cvv        : string 

  logo! : string ;

  constructor() {
    this.cardNum        = 'xxxxxxxxxxxxxxxx' ;
    this.fullName       = 'ibrahim ahmed saleem';
    this.expMonth       = 'MM';
    this.expYear        = 'YY';
    this.cvv            = '777';
    this.logo           = "";
  }
  
  ngOnInit() {
  }

  isForm(){
    this.form = !this.form;
    this.svgRotate = !this.svgRotate
    
  }

  isFlip(){
    this.flip = !this.flip;
  }

  resValue(data :any){  
    this.values = data;
    this.values.cardNum == "" ? this.cardNum ="xxxxxxxxxxxxxxxx": this.cardNum = this.values.cardNum
    this.fullName = this.values.fullName
    this.expMonth = this.values.expMonth
    this.expYear = this.values.expYear
    this.cvv = this.values.cvv

    switch (this.cardNum.slice(0, 1)){

      case "3":
        this.logo = "assets/logos/americanexpress.png"
        break;
      case "4":
        this.logo = "assets/logos/visa.png"
        break;
      case "5":
        this.logo = "assets/logos/mastercard.png"
        break;
      case "6":
        this.logo = "assets/logos/discover.png"
        break;
      default :
        this.logo = ""
    }

  }


}
