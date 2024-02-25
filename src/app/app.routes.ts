import { Routes } from '@angular/router';
import {UserViewComponent} from "./user-view/user-view.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {TeamViewComponent} from "./team-view/team-view/team-view.component";

export const routes: Routes = [
    {path :'users',component:UserViewComponent},
    {path: 'users/create', component:UserAddComponent},
    {path: 'team', component:TeamViewComponent}
];
