import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup , Validators} from "@angular/forms";
import { RacingServicesService } from '../racing-services.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

   constructor(private pc: RacingServicesService) {
 
  	
   }

  ngOnInit() {
  	// RacingServicesService.postData(f.value);

  }

}
