
interface UsersType{
    id:string;
    UserName: string ;
    email:string ;
    Password:string ;
    confirPassword?:string ;
}

interface DataLocation {
  name: string;
  region: string;
}

interface DataCurrentWeather {
  windchill_f: number;
  dewpoint_f: number;
  pressure_in: number;
  pressure_mb: number;
  vis_km: number;
  wind_kph: number;
  wind_dir: number;
  vis_miles: number;
  wind_mph: number;
  cloud: number;
  condition: {
    text: string;
    icon: string;
  };
  windchill_c:number;
  dewpoint_c: number;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  heatindex_c: number;
  heatindex_f: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
}

export type { UsersType, DataLocation, DataCurrentWeather };
