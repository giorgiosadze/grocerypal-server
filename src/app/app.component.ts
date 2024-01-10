import { Component } from '@angular/core';
import { NavigationStart, Event, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './classes';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Hello World';
    loggedInUser: User | null = null;//logged-in user's token; null if not logged in
    logoSrc = '../assets/images/grocery-pal-logo-happy.png';

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit(): void {
        //runs whenever the user routes to a page
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                //retrieve the user's token (will be null if not logged in)
                this.loggedInUser = this.auth.readToken();
                //random chance for the logo apple to be evil
                this.randomLogoChange();
            }
        });
    }

    //random chance for the logo apple to be evil
    randomLogoChange() {
        if (Math.random() < 0.1) {
            this.logoSrc = '../assets/images/grocery-pal-logo-evil.png';
        } else {
            this.logoSrc = '../assets/images/grocery-pal-logo-happy.png'
        }
    }

    logout() {
        //clear the token
        this.auth.clearToken();
        //redirect to the login page
        this.router.navigate(['/login']);
    }
}
