export interface Mob {
  id: string;
  name: string;
  health_points: number;
  behavior: string;
  type: string[];
  speed: number | null;
  hitbox: { height: number; width: number }[];
}
