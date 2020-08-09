export interface Candidate {
  id?: string;
  name: string;
  noOfChallengesSolved: number;
  expertiseLevel: number;
  expertIn: Languages;
  totalVotes: number;
}

export interface Languages {
  dataStructures: number;
  algorithms: number;
  cpp: number;
  java: number;
  python: number;
}
