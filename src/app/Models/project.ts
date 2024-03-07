import { Team } from "./team";

export class Project {
    
    projetId!:number;
    projectName!: string;
    startDate!: Date;
    endDate!: Date;
    status!: number;
    team?: Team;
    statusSymbol: string | undefined;
    teamName!: string;

}
