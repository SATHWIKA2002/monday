import { Component, ViewChild, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router'; // Import Router
import { SearchService } from '../services/search.service'; // Import the Search Service

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, FormsModule] // Add CommonModule and FormsModule to imports
})
export class DashboardComponent {
  query: string = '';
  summary: string = '';
  searchResults: string[] = [];

  messages: { type: string; text: string }[] = [
  
  ];
  userMessage: string = '';

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(private router: Router, private searchService: SearchService, private cdr: ChangeDetectorRef) {}

  navigateToBenchmarking(): void {
    this.router.navigate(['/benchmarking']);
  }

  navigateToChatbot(): void {
    this.router.navigate(['/chatbot']);
  }

  onSearch(): void {
    if (this.query.trim()) {
      this.searchService.search(this.query).subscribe(
        data => {
          this.searchResults = data.map((item: any) => item.title);
          this.summary = this.searchResults.join(', ');
          this.cdr.detectChanges();
        },
        error => {
          console.error('Error occurred while fetching data:', error);
        }
      );
    }
  }

  focusSearchInput(): void {
    this.searchInput.nativeElement.focus();
  }

  @HostListener('document:keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent): void {
    if (this.searchInput.nativeElement === document.activeElement) {
      this.onSearch();
    }
  }

  sendMessage(): void {
    if (this.userMessage.trim()) {
      this.messages.push({ type: 'user', text: this.userMessage });
      this.botResponse(this.userMessage);
      this.userMessage = '';
    }
  }

  botResponse(userMessage: string): void {
    setTimeout(() => {
      this.messages.push({
        type: 'bot',
        text: `I'm still learning, but here's a response to "${userMessage}"`
      });
    }, 1000);
  }
}
