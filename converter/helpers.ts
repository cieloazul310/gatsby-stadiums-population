import { Position } from '@turf/helpers';

export interface Venue {
  id: string;
  type: 'stadium' | 'arena';
  slug: string;
  name: string;
  coordinates: Position;
  clubs: string[];
}

function isVenue(obj: Venue | Record<string, unknown>): obj is Venue {
  return (
    typeof obj === 'object' &&
    (obj.type === 'stadium' || obj.type === 'arena') &&
    'id' in obj &&
    'slug' in obj &&
    'name' in obj &&
    'coordinates' in obj &&
    (obj.coordinates as number[]).length === 2
  );
}

export function venue(obj: Record<string, unknown>): Venue {
  if (!isVenue(obj)) throw new Error('Object is not venue');
  return obj as Venue;
}
