import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-add-speciality',
  templateUrl: './add-speciality.component.html',
  styleUrls: ['./add-speciality.component.css']
})
export class AddSpecialityComponent implements OnInit {

  FormGroup: FormGroup;
  TotalRow: number;
  constructor( private fb: FormBuilder, private submitdata: ApiDataService) { }
  ngOnInit(): void {
    this.FormGroup = this.fb.group({
      itemRows: this.fb.array([this.InitItemRow()]),
    });
  }
  InitItemRow() {
    return this.fb.group({
      Name: [''],
      RollNo: [''],
      Class: [''],
      MobileNo: ['']
    });
  }
AddNewRow() {
 const control = <FormArray>this.FormGroup.controls['itemRows'] ;
 control.push(this.InitItemRow());
}
deleteRow(index: number) {
  const control = <FormArray>this.FormGroup.controls['itemRows'];
  if (control != null){
    this.TotalRow = control.value.length;
}
  if (this.TotalRow > 1){
    control.removeAt(index);
}
else
{
  alert('one record is mendotry');
  return false;
}
}
submitSpeciality(degreeName, dregreeYear)  {
  this.submitdata.
console.log("for adding the user data  inthe API")
}

}
