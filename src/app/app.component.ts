import { Component, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() name: string;


  title = 'Digital CV';
  constructor(@Inject(DOCUMENT) private document: Document) { }
  
  goTolinkedin(): void {
      const url = 'https://www.linkedin.com/in/soumyajeet-kundu-512ab212a/';
      window.open(url, '_blank');
    }

  goTogithub(): void {
      const url = 'https://github.com/soumyajeet-kundu';
      window.open(url, '_blank');
    }

  goTohackerrank(){
    const url = 'https://www.hackerrank.com/soumyajeet_kundu';
    window.open(url, '_blank');
  }

  goTobitestudio(){
    const url = 'https://github.com/soumyajeet-kundu/Shadow-BiteStudio';
    window.open(url, '_blank');
  }

  

  toExp(){
    document.getElementById("exp").scrollIntoView({behavior:"smooth"});    
  }
  toEdu(){
    document.getElementById("edu").scrollIntoView({behavior:"smooth"});    
  }
  toPro(){
    document.getElementById("projects").scrollIntoView({behavior:"smooth"});    
  }
  toCerti(){
    document.getElementById("projects").scrollIntoView({behavior:"smooth"});    
  }


}

