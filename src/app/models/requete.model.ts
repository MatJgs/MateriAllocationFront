import {Room} from "./room.model";
import {Material} from "./material.model";

export interface Requete{
  id:number;
  justification: string;
  neededMaterials:Material[];
  date:Date;
  neededCapacity:number;
  beginAt:Date;
  endAt:Date;
  currentStatus:string;
}
