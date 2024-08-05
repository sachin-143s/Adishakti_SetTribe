import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Astrologer {
  id: number;
  name: string;
  skills: string;
  image: string;
  rating: number; // Add rating property
}

@Component({
  selector: 'app-find-astrologers',
  templateUrl: './find-astrologers.component.html',
  styleUrls: ['./find-astrologers.component.css']
})
export class FindAstrologersComponent implements OnInit {
  data:any=[]
  
  constructor(private http:HttpClient){
    this.getAllData()
  }
  filteredAstrologers: Astrologer[] = [];
  searchTerm: string = '';
  hoverRating: number | null = null; // For managing hover effect

  ngOnInit(): void {
    this.data = this.data;
  }

  filterAstrologers(): void {
    const searchTerm = this.searchTerm.toLowerCase().trim();

    if (searchTerm === '') {
      this.getAllData()
      return;
    }
    else{
      this.getSearchData()
    }
    this.data = this.data.filter((astrologe: { name: string; skills: string; }) =>
      astrologe.name.toLowerCase().includes(searchTerm) ||
      astrologe.skills.toLowerCase().includes(searchTerm)
    );
  }
  getAllData(){
    this.http.get("http://localhost:8080/api/astrologers/get-astrologers").subscribe(
      (data)=>{
        this.data=data
      
      }
      ,(error)=>
      {
        
      }
     )
  }
  getSearchData(){
    this.http.get("http://localhost:8080/api/astrologers/get-data/"+this.searchTerm).subscribe(
      (data)=>{
        this.data=data
       // const objectURL = URL.createObjectURL(data);
        //this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        
      }
      ,(error)=>
      {
        
      }
     )
  }
  chatWithAstrologer(id: number): void {
    console.log(`Chat with astrologer ID: ${id}`);
    // Implement chat functionality here
  }

  callAstrologer(id: number): void {
    console.log(`Call astrologer ID: ${id}`);
    // Implement call functionality here
  }
}
