import { Routes } from '@angular/router';
import {UserViewComponent} from "./user-view/user-view.component";
import {UserAddComponent} from "./user-add/user-add.component";

export const routes: Routes = [
    {path :'users',component:UserViewComponent},
    {path: 'users/create', component:UserAddComponent}
];
