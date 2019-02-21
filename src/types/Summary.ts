import { RadiusProps } from './Radiuses';
import { Categories } from './Categories';

export interface Summary extends RadiusProps {
  name: string;
  club: string[];
  category: Categories[];
  shortname: string[];
  slug: string;
}
