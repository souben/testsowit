import { FeatureCollection } from "geojson";

export interface Plot {
    id: number;
    title: string;
    coordinates: FeatureCollection;
    totalArea: number;
}