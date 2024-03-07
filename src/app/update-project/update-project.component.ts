import { Component } from '@angular/core';
import { Project } from '../Models/project';
import { ProjectService } from '../Services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrl: './update-project.component.css'
})
export class UpdateProjectComponent {

  project : Project = new Project();
  id!: number;
  

  constructor(private projectService : ProjectService , private route: ActivatedRoute ,private router: Router){}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.projectService.getProjectById(this.id).subscribe(data =>{
      this.project = data;
    });
  }

  onSubmit(){
    this.projectService.updateProject(this.id, this.project).subscribe( data =>{
      this.goToProjectList();
    }
    , error => console.log(error));
  }

  goToProjectList(){
    this.router.navigate(['/projects']);
  }


}
