import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User, status } from '../classes';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    hide: boolean = true;//boolean for password being hidden or not
    user: User = new User;//user object synced with form fields
    errorMessage: string = "";
    isFormError: boolean = false;
    private authSub: any;

    constructor(private auth: AuthService, private routing: Router) { }

    ngOnInit(): void {
    }

    //upon the user clicking the signup button
    onSubmit(): void {
        this.isFormError = false;
        //check for empty fields
        var valid: boolean = this.user.userfname.length > 0 && this.user.userlname.length > 0 && this.user.useremail.length > 0 && this.user.userpassword.length > 0;
        if (!valid) {
            this.errorMessage = "Fill in all fields";
            this.isFormError = true;
            return;
        }
        //check for fields exceeding maximum characters defined by the database
        valid = this.user.userfname.length < 30 && this.user.userlname.length < 30 && this.user.useremail.length < 50 && this.user.userpassword.length < 30;//keep password at 30
        if (!valid) {
            this.errorMessage = "One or more fields exceed the character max";
            this.isFormError = true;
            return;
        }
        //check if the email has the correct format
        var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!reg.test(this.user.useremail)) {
            this.errorMessage = "Invalid email";
            this.isFormError = true;
            return;
        }
        //convert email to lowercase
        this.user.useremail = this.user.useremail.toLowerCase();
        //attempts to log in the user
        this.authSub = this.auth.register(this.user).subscribe(
            response => {
                //if successful
                if (response.status == status.OKAY) {
                    //at this point, the new user is logged in, so...
                    //save login token locally
                    this.auth.setToken(response.token);
                    //redirect to products page
                    this.routing.navigate(["/products"]);
                }
                //if the database connection failed
                else if (response.status == status.DB_CONNECTION_FAIL) {
                    this.errorMessage = "Database connection failed";
                    this.isFormError = true;
                }
                //if email already exists
                else if (response.status == status.NOT_AUTHORIZED) {
                    this.errorMessage = "Email already used with an account";
                    this.isFormError = true;
                }
                //anything else
                else {
                    this.errorMessage = "Unexpected issue. Try again later.";
                    this.isFormError = true;
                }
            }, error => {
                console.log("error:", error.error);
            }
        );
    }

    ngOnDestroy(): void {
        if (this.authSub) this.authSub.unsubscribe();
    }
}
