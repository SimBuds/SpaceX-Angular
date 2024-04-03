export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

export interface Mission {
  flight_number: number;
  mission_name: string;
  upcoming: boolean;
  launch_year: string;
  rocket: Rocket;
  details: string;
  links: {
    mission_patch_small: string;
  };
}