import { LatLngExpression, LatLngTuple } from "leaflet";

export interface House {
    name: string;
    description?: string;
    pos: LatLngExpression | LatLngTuple;
    bedsAvailable: number;
    imgUrl?: string;
}
