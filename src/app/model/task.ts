import {Team} from "./team";

export interface Task {
  id?: string;
  name?: string;
  description?: string;
  point?: string;
  assignedTo?: Team;
  state?: string;
  percent?: string;
}
