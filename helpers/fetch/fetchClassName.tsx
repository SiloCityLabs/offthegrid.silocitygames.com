import adList from '@/json/otg/adjectives.json';
import nounList from '@/json/otg/nouns.json';
import { randomListItem } from '../_silabs/randomListItem';

export function fetchClassName(): string {
  let adjective = randomListItem(adList);
  let noun = randomListItem(nounList);

  adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1);
  noun = noun.charAt(0).toUpperCase() + noun.slice(1);

  return `The ${adjective} ${noun}`;
}
