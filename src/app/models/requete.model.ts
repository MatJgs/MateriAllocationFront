import {Room} from "./room.model";
import {Material} from "./material.model";

export interface Requete{
  id:number;
  neededMaterials:Material[];
  date:Date;
  capacity:number;
  startTime:Date;
  endTime:Date;
  status:string;
}
