import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit , OnChanges {

  cardForm!:FormGroup;
  months! :string[]
  years! :number[]

  cardNum!          : string              
  fullName!         : string            
  expMonth!         : string             
  expYear!          : string        
  cvv!              : string  

  constructor(private fb :FormBuilder) {
    this.months =['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    this.years =[25, 26, 27, 25, 28, 29, 30];
    this.cardNum          = ''
    this.fullName         = ''
    this.expMonth         = 'MM'
    this.expYear          = 'YY'
    this.cvv              = '123'
  }



  ngOnChanges(changes: SimpleChanges): void {
    this.createForm()
  }

  @Output() newItemEvent = new EventEmitter<any>();
  @Input() item:any ;
  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.cardForm = this.fb.group({
      cardNum:[this.item?.cardNum  ],
      fullName:[this.item?.fullName ],
      expMonth:[this.item?.expMonth ],
      expYear:[this.item?.expYear ],
      cvv:[this.item?.cvv ]
    })
  }

  get name (){return this.cardForm.get("cardNum")}


  sendData(){
    this.cardNum = this.cardForm.value.cardNum
    this.fullName = this.cardForm.value.fullName
    this.expMonth = this.cardForm.value.expMonth
    this.expYear = this.cardForm.value.expYear
    this.cvv = this.cardForm.value.cvv

    this.newItemEvent.emit(this.cardForm.value);
  }

}
