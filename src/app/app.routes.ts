import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/admin/login/login.component';
import { LayoutComponent } from './Pages/admin/layout/layout.component';
import { ProductsComponent } from './Pages/admin/products/products.component';
import { OrderComponent } from './Pages/admin/order/order.component';
import { CategoriesComponent } from './Pages/admin/categories/categories.component';
import { CheckoutComponent } from './Pages/website/checkout/checkout.component';

export const routes: Routes = [

{
    path:'',
    redirectTo:'login',
    pathMatch:'full'
},
{
    path:'',
    component:LoginComponent
},
{
    path:'',
    component:LayoutComponent,
    children:[
        {
            path:'products',
            component:ProductsComponent
        },
        {
            path:'order',
            component:OrderComponent
        },
        {
            path:'categories',
            component:CategoriesComponent
        },
        {
            path:'checkout',
            component:CheckoutComponent
        }
    ]
},


];
