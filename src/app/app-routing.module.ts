import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
//Routes
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'products',
        component: ProductsComponent,
    },
    {
        path: 'product_detail/:id',
        component: ProductDetailComponent
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: 'user-details/:id',
        component: UserDetailsComponent,
    },
    {
        //keep this route at the bottom (the end of this "routes" array)
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
