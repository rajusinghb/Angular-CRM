import { Component } from '@angular/core';
import { LeadServiceService } from 'src/app/service/lead-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent {
  leadObj: any = {
    "name": "raju",
    "email": "",
    "username": "raju",
    "password": "",
    "role": ""
    
  };
   

  constructor(private leadService: LeadServiceService) { }

  addLead() {
    // Logging leadObj to verify its structure before sending the request
    console.log('Lead Object:', this.leadObj);

    this.leadService.addLead(this.leadObj).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error);
        console.error('Error status:', error.status); // Status code (400)
        console.error('Error message:', error.message); // More error details
        if (error.error) {
          console.error('Backend error details:', error.error); // The response body from the backend
        }
      }
    );
  }
}
