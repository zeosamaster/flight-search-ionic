import { City } from "./city";
import { Coords } from "./coords";

export class Airport {
    public id: string;
    public code: string;
    public name: string;
    public coords: Coords;
    public city: City;
}