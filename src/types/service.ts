import { SubService } from "./subService";

  export interface Service {
    id: string;
    name: string;
    description: string;
    image:string;
    subServices: SubService[];
    
  }
  
  
