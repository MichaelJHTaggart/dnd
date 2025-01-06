export interface Character {
  name: string;
  class: string;
  race: string;
  level: number;
  portrait?: string;
  quote?: string;
  deathDate?: Date;
  causeOfDeath?: string;
}

export interface Player {
  name: string;
  character: Character;
}

export interface FallenCharacter extends Character {
  playerName: string;
  deathDate: Date;
  causeOfDeath: string;
}