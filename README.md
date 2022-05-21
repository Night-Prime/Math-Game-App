# MathForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## To ME:
Note this error:

error : {{ cardForm.controls.name.errors | json}} // this is error for formControlName name

fix : {{ cardForm.controls['name'].errors | json}} // formControlName inside ['']

or

fix : {{ cardForm.get('name')?.errors | json}}
