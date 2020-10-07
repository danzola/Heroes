import { Component, Input, OnInit } from '@angular/core';
import { ImplicitAuthenticationService } from '../implicit-authentication.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  
  @Input() position = 'normal';
  liveTokenValue: boolean = false;
  user: any;
  title: any;
  username = '';
  userMenu = [{ title: 'ver todas', icon: 'fa fa-list' }];
  public noNotify: any = '0';
  private autenticacion = new ImplicitAuthenticationService;


  constructor() { 
    this.liveToken();
  }

  liveToken() {
    if (this.autenticacion.live()) {
      this.liveTokenValue = this.autenticacion.live();
      this.username = (this.autenticacion.getPayload()).sub;
    }
    return this.autenticacion.live();
  }

  logout() {
    this.autenticacion.logout();
  }

  ngOnInit() {
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/