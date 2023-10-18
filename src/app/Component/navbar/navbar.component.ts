import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogin: any = null;
  constructor(private _auth: AuthService) {}
  ngOnInit(): void {
    this._auth.userData.subscribe({
      next: (data) => {
        console.log(data);
        this.isLogin = this._auth.userData.getValue();
      },
    });
  }

  logOut() {
    this._auth.logout();
  }
}
