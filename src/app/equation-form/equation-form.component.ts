import { delay, filter, scan } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {MathValidators} from '../math-validators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-equation-form',
  templateUrl: './equation-form.component.html',
  styleUrls: ['./equation-form.component.css']
})
export class EquationFormComponent implements OnInit {
  secondsPerSolution = 0;
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  }, [MathValidators.addition('answer', 'a', 'b')]
  );
  constructor() { }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit() {
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(100),
      scan((acc, value) => {
        return {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        }
      },{ numberSolved: 0, startTime: new Date() })
      )
      .subscribe(( {numberSolved, startTime} ) => {
        // logic for getting time of solution solved
        this.secondsPerSolution = (
          new Date().getTime() - startTime.getTime()
        ) / numberSolved /1000;


        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: ''
        });
            // instead of
        // this.mathForm.controls['a'].setValue(this.randomNumber());
        // this.mathForm.controls['b'].setValue(this.randomNumber());
        // this.mathForm.controls['answer'].setValue('');
    });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

}
