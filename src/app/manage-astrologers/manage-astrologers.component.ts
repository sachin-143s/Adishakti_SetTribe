import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AstrologerService } from '../astrologer.service';

@Component({
  selector: 'app-manage-astrologers',
  templateUrl: './manage-astrologers.component.html',
  styleUrls: ['./manage-astrologers.component.css']
})
export class ManageAstrologersComponent implements OnInit {
  astrologers: any[] = [];
  searchForm: FormGroup;
  newAstrologerForm: FormGroup;
  formFields = [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'mobile', label: 'Mobile', type: 'text' },
    { name: 'aadhar', label: 'Aadhar Number', type: 'text' },
    { name: 'dob', label: 'Date of Birth', type: 'date' },
    { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'] },
    { name: 'exp', label: 'Experience', type: 'number' },
    { name: 'langKnown', label: 'Languages Known', type: 'text' },
    { name: 'skills', label: 'Skills', type: 'text' },
    { name: 'email', label: 'Email', type: 'text' },
    { name: 'profilePhoto', label: 'Profile Photo URL', type: 'text' },
    { name: 'city', label: 'City', type: 'text' },
    { name: 'district', label: 'District', type: 'text' },
    { name: 'state', label: 'State', type: 'text' },
    { name: 'country', label: 'Country', type: 'text' },
    { name: 'pinCode', label: 'Pin Code', type: 'text' },
    { name: 'ratePerMinute', label: 'Rate per Minute', type: 'number' },
    { name: 'certification', label: 'Certification', type: 'text' },
    { name: 'degree', label: 'Degree', type: 'text' }
  ];
  displayAddForm: boolean = false;
  selectedAstrologer: any = null;

  constructor(private astrologerService: AstrologerService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: ['']
    });

    this.newAstrologerForm = this.fb.group(this.createFormGroup());
  }

  ngOnInit(): void {
    this.loadAstrologers();
  }

  loadAstrologers(): void {
    this.astrologerService.getAllAstrologers().subscribe((data: any[]) => {
      this.astrologers = data;
    });
  }

  approveAstrologer(id: number): void {
    this.astrologerService.approveAstrologer(id).subscribe(() => {
      this.loadAstrologers();
    });
  }

  rejectAstrologer(id: number): void {
    this.astrologerService.rejectAstrologer(id).subscribe(() => {
      this.loadAstrologers();
    });
  }

  deleteAstrologer(id: number): void {
    this.astrologerService.deleteAstrologer(id).subscribe(() => {
      this.loadAstrologers();
    });
  }

  search(): void {
    const searchTerm = this.searchForm.value.searchTerm;
    this.astrologerService.searchAstrologers(searchTerm).subscribe((data: any[]) => {
      this.astrologers = data;
    });
  }

  addAstrologer(): void {
    if (this.newAstrologerForm.valid) {
      this.astrologerService.addAstrologer(this.newAstrologerForm.value).subscribe(() => {
        this.loadAstrologers();
        this.newAstrologerForm.reset();
        this.displayAddForm = false; // Hide form after submission
      });
    }
  }

  createFormGroup() {
    const group: any = {};
    this.formFields.forEach(field => {
      group[field.name] = [''];
    });
    return group;
  }

  editAstrologer(astrologer: any): void {
    // Populate the form with the astrologer's data for editing
    this.selectedAstrologer = astrologer;
    this.newAstrologerForm.patchValue(astrologer);
    this.displayAddForm = true; // Show the form for editing
  }

  showAddAstrologerForm(): void {
    // Toggle form visibility
    this.displayAddForm = !this.displayAddForm;
    if (!this.displayAddForm) {
      this.newAstrologerForm.reset(); // Reset form if hiding
      this.selectedAstrologer = null; // Clear selected astrologer
    }
  }
}
