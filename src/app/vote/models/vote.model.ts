export enum ConfidenceLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}
export interface Vote {
    voteId: number;
    cardValue: number;
    voteTimestamp: string ;
    confidenceLevel: ConfidenceLevel;
}
  