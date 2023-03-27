import { Material } from "./material.model";

export interface Room {
  id: number;
  number: number;
  capacity: number;
  studentAccess: boolean;
  materials: Material[];
}
