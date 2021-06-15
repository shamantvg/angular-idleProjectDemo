import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle'; // import it to your component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-idle-project';
  constructor(private bnIdle: BnNgIdleService) {
 
  }

  // initiate it in your component OnInit
  ngOnInit(): void {
    this.bnIdle.startWatching(20).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        console.log('session expired');
        alert("You have been inactive for  20 second(s).You will be logged off automatically");
      }
    });
  }
}
