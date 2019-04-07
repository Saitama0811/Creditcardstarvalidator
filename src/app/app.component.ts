import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accno';
  maskedacc = '';
  character = '*';
  inputacc;
  lengthof;
  masklength;
  inputlength;
  tempacc;
  tempmask;
  numberlength;
  anothertempacc;
  tempstarnumber;
  newmaskedacc;

  constructor() {
    this.tempacc = '123456789000000000000000000000000cvh';
    this.anothertempacc = this.tempacc;
    this.lengthof = this.tempacc.length;
    this.lengthof = this.lengthof - 4;
    this.anothertempacc = this.anothertempacc.slice(this.lengthof);
    this.maskedacc = this.character.repeat(this.lengthof) + this.anothertempacc;
  }

  mask(searchValue) {
    this.tempacc = searchValue;
    this.anothertempacc = this.tempacc;
    this.lengthof = this.tempacc.length;
    this.lengthof = this.lengthof - 4;
    if (this.lengthof >= 0) {
      this.anothertempacc = this.anothertempacc.slice(this.lengthof);
      this.maskedacc = this.character.repeat(this.lengthof) + this.anothertempacc;
    } else {
      console.log('Not required length');
    }
  }

  onSearchChange(searchValue: string ) {
    console.log(searchValue);
    this.mask(searchValue);
  }

  onSubmit() {
    this.masklength = this.maskedacc.length;
    // this.inputlength = this.inputacc.length;
    this.tempmask = this.maskedacc;
    this.numberlength = this.tempmask.replace(/[^*]/g, '').length;
    console.log(this.numberlength);
    this.tempstarnumber = this.tempacc.substring(0, this.numberlength);
    this.newmaskedacc = this.maskedacc.slice(this.numberlength);
    this.tempstarnumber = this.tempstarnumber + this.newmaskedacc;
    console.log(this.tempstarnumber);
    if (this.inputacc === this.tempstarnumber) {
      alert('true');
    }    else {
      alert('false');
    }
  }
}
