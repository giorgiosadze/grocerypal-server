import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from "./classes";
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    //retrieves the token from local storage, or null if it doesn't exist.
    private getTokenFromLocalStorage(): string | null {
        var token = localStorage.getItem('access_token');
        //Sometimes the token is the string 'undefined' for some reason.
        //It should either exist as a token or not exist at all, so it's removed.
        if (token === "undefined") {
            this.clearToken();
            token = null;
        };
        return token;
    }

    public getToken(): string | null {
        return this.getTokenFromLocalStorage();
    }

    public setToken(token: string): void {
        localStorage.setItem('access_token', token);
    }

    public readToken(): User | null {
        const token = this.getTokenFromLocalStorage();
        if (token) {
            return jwt_decode(token);
        } else {
            return null;
        }
    }

    isAuthenticated(): boolean {
        const token = this.getTokenFromLocalStorage();
        if (token) {
            return true;
        } else {
            return false;
        }
    }

    login(user: User): Observable<any> {
        return this.http.post<any>(environment.apiBaseUrl + 'login', { user: user.toJson() });
    }

    register(user: User): Observable<any> {
        //{ fname: user.fname, lname: user.lname, email: user.email, password: user.password }
        return this.http.post<any>(environment.apiBaseUrl + 'register', { user: user.toJson() });
    }

    clearToken(): void {
        localStorage.clear();
    }

    // get all users
  getAllUsers() : Observable<any> {
    return this.http.get<any>(environment.apiBaseUrl+ 'users');
  }

  // get user of id
  getUserById(id : string) : Observable<any> {
    // console.log("inside get one by id")
    return this.http.get<any>(environment.apiBaseUrl + 'user/'+ id);
  }

  // delete user of id
  deleteUserById(id : number) : Observable<any> {
    return this.http.delete<any>(environment.apiBaseUrl+ 'user/'+id);
  }
}
