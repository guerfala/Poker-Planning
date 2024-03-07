import { Component , OnInit} from '@angular/core';
import { Project } from '../Models/project';
import { ProjectService } from '../Services/project.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../project-details/project-details.component';



@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{

  projects!: Project[];

  dataSource: Project[] = [];

  startDate: Date | undefined;
  endDate: Date | undefined;
  currentPage: number = 1;
  pageSize: number = 10;

  

  constructor(private projectService: ProjectService , private router: Router , private dialog: MatDialog) {}
  

  ngOnInit(): void{
    this.getProjects();
  }

  private getProjects(){
    this.projectService.getProjectList().subscribe(data => {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        this.projects = data.slice(startIndex, endIndex);
        // Récupérez les détails de l'équipe pour chaque projet
       // this.projects.forEach(project => {
         //   this.projectService.getTeamById(project.team.teamId).subscribe(team => {
           //     project.teamName = team.teamName;
            //});
        //});
    });
}


  updateProject(id: number){
    this.router.navigate(['updateProject', id]);
  }

  deleteProject(id: number) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe(data => {
        console.log(data);
        this.getProjects();
      });
    }
  }

  filterByDateRange() {
    if (this.startDate !== undefined && this.endDate !== undefined) {
      this.projectService.getProjectList().subscribe(data => {
        this.projects = data.filter(project =>
          project.startDate >= this.startDate! && project.endDate <= this.endDate!
        );
      });
    } else {
      // Si les dates de début ou de fin ne sont pas définies, récupérez tous les projets
      this.getProjects();
    }
  }

  goToNextPage() {
    this.currentPage++;
    this.getProjects();
  }
  
  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getProjects();
    }
  }

  showProjectDetails(project: Project) {
    const dialogRef = this.dialog.open(ProjectDetailsComponent, {
      data: project
    });
  }
  
  
  


}


