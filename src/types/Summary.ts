import { RadiusProps } from './Radiuses';

export interface Summary extends RadiusProps {
  name: string;
  club: string[];
  category: string[];
  shortname: string[];
  slug: string;
}
