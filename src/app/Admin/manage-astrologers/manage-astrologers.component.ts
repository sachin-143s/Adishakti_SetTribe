import { Component,OnInit } from '@angular/core';
import { AstrologerService } from '../../astrologer.service';
// import { AstrologerService } from '../../../../Adishakti_SetTribe/src/app/astrologer.service';

@Component({
  selector: 'app-manage-astrologers',
  templateUrl: './manage-astrologers.component.html',
  styleUrl: './manage-astrologers.component.css'
})
export class ManageAstrologersComponent implements OnInit {
    astrologers: any[] = [];
    filteredAstrologers: any[] = [];
    searchTerm: string = '';
  
    constructor(private astrologerService: AstrologerService) {}
  
    ngOnInit(): void {
      this.astrologerService.getAstrologers().subscribe(data => {
        this.astrologers = data;
        this.filteredAstrologers = data;
      });
    }
  
    searchAstrologers(): void {
      this.filteredAstrologers = this.astrologers.filter(astrologer =>
        `${astrologer.firstName} ${astrologer.lastName}`.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

