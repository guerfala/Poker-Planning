import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../Models/project';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public project: Project , public dialogRef: MatDialogRef<ProjectDetailsComponent>) {}

  calculateDurationInDays(): number {
    const diffInMilliseconds = Math.abs(this.project.endDate.getTime() - this.project.startDate.getTime());
    const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
    return diffInDays;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

