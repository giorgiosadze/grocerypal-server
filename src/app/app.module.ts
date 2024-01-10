//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Angular Material modules
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { ViewOrderComponent } from './view-order/view-order.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { ProductDetailComponent } from './product-detail/product-detail.component'

// import { MatCardModule } from '@angular/material/card';
// import { MatGridListModule } from '@angular/material/grid-list';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        ProductsComponent,
        AboutComponent,
        LoginComponent,
        SignupComponent,
        ProductDetailComponent,
        UsersComponent,
        UserDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatDividerModule,
        MatCardModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        MatTableModule,
        MatProgressSpinnerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
