import {User} from "./user";
export interface Team {
  id?: string;
  name?: string;
  manager?: User;
  department?: string;

}
