import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'sncr-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any = [];
  columns: any;
  userInfo: any = {};

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.userInfo = token ? jwt_decode(token) : {};
    if (token != null) {
      this.userService.getUsers(token).subscribe(response => {
        if (response && response.data.length > 0) {
          this.users = response.data;
          let aaa = [{ 'title': 'Email', 'fieldName': 'email', 'fieldPosition': '4' },
          { 'title': 'First name', 'fieldName': 'firstName', 'fieldPosition': '1' },
          { 'title': 'Last name', 'fieldName': 'lastName', 'fieldPosition': '2' },
          { 'title': 'Username', 'fieldName': 'username', 'fieldPosition': '3' }];

          this.columns = aaa.sort((a, b) => parseInt(a.fieldPosition) - parseInt(b.fieldPosition));
        }
      })
    }
    else
      this.router.navigateByUrl('/login');
  }
}
