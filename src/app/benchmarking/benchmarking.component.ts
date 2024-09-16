import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  standalone:true,
  selector: 'app-benchmarking',
  templateUrl: './benchmarking.component.html',
  styleUrls: ['./benchmarking.component.css']
})
export class BenchmarkingComponent {
  accuracy: number = 95;  // Example values
  conciseness: number = 88;
  relevance: number = 92;
  constructor(private router: Router) { }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
