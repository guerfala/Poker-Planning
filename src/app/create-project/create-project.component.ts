import { Component , OnInit  } from '@angular/core';
import { Project } from '../Models/project';
import { ProjectService } from '../Services/project.service';
import { Router } from '@angular/router';
import { Team } from '../Models/team';



@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent implements OnInit {

  project : Project = new Project();
  teams: Team[] = [];
  selectedTeam: number=0;
  
  


  constructor(private projectService : ProjectService , private router: Router){}
 

  ngOnInit(): void{
    // Récupérer la liste des équipes disponibles
    this.projectService.getAllTeams().subscribe(
      data => {
        console.log(data);
        this.teams = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  saveProject (){
    
    this.projectService.createProject(this.project).subscribe( data => {
      console.log(data);
    },
    error => console.log (error));
    this.router.navigate(['/projects']);
    
    
  }


  onSubmit(){
    console.log(this.project);

    const currentDate = Date.now();
    const startDate = new Date(this.project.startDate).getTime();
    const endDate = new Date(this.project.endDate).getTime();

    if (currentDate < startDate) {
        this.project.status = 1; // Début
        this.project.statusSymbol = '🔴'; // Cercle rouge
    } else if (currentDate >= startDate && currentDate <= endDate) {
        this.project.status = 2; // En cours
        this.project.statusSymbol = '🔵'; // Cercle bleu
    } else {
        this.project.status = 3; // Terminé
        this.project.statusSymbol = '🟢'; // Cercle vert
    }
    


    this.saveProject();
    this.router.navigate(['/projects']);
  }

  getDateDifference(date1: Date, date2: Date): string {
    const difference = Math.abs(date2.getTime() - date1.getTime());
    const daysDifference = Math.ceil(difference / (1000 * 3600 * 24));
    return `${daysDifference} jours`;
}


}
