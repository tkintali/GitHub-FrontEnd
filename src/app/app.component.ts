import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserDataService]
})
export class AppComponent {
  title = 'GitHub-FrontEnd';
  value = 'caferacer98';

  constructor(private userDataService: UserDataService) { }

}