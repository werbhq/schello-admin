import { FacialData } from "./Report";

export interface WantedList {
  id: string;
  name: string;
  age: number;
  photoUrl: string;
  photoId: string; // Bucket path. Only for internal use
  facialData: FacialData;
  reported: string[];
}
