import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-buttons',
  template: `
  <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
    <button class="btn btn-outline-danger" (click)="auth.logout({ returnTo: document.location.origin })">
      Log out
    </button>
  </ng-container>
  
  
  <ng-template #loggedOut>
    <button class="btn btn-outline-primary" (click)="auth.loginWithRedirect()">Log in</button>
  </ng-template>
`,})
export class AuthButtonsComponent {

  
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {

  }
  
  
}
