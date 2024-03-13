import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 
  import {Component, OnInit} from '@angular/core';
  import {
    CdkDragDrop,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
    moveItemInArray,
    transferArrayItem,
  } from '@angular/cdk/drag-drop';
  import { Task } from '../Task/models/task';
  import { TaskService } from '../Task/services/task.service';

  /**
   * @title Drag&Drop connected sorting group
   */
  @Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
  })
  export class BoardComponent implements OnInit {
    NOTDONE: Task[] = [];
    INPROGRESS: Task[] = [];
    DONE: Task[] = [];
    previousStatus: number = 0;
     
    showDropdown: boolean = false;

    constructor(private taskService: TaskService,
      private http: HttpClient) { }

    ngOnInit(): void {
      this.fetchTasks();
    }

    fetchTasks() {
      this.taskService.getTaskList().subscribe(tasks => {
        // Log the response
        tasks.forEach(task => {
          if (task.status === 'NOTDONE') {
            this.NOTDONE.push(task);
          } else if (task.status === 'INPROGRESS') {
            this.INPROGRESS.push(task);
          } else if (task.status === 'DONE') {
            this.DONE.push(task);
          }
        });
      
      });
    }
     toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

    drop(event: CdkDragDrop<Task[], any, any>) {
      
      
  if (event.container.id === 'cdk-drop-list-0') {
  
    this.previousStatus=0;
  } else if (event.container.id === 'cdk-drop-list-1') {
  
    this.previousStatus=1;
  } else if (event.container.id === 'cdk-drop-list-2') {
    
    this.previousStatus=2;
  }    
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
 
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );

        event.container.data[event.currentIndex].status = this.previousStatus;
        this.taskService.updates(event.container.data[event.currentIndex].taskId,event.container.data[event.currentIndex])
        .subscribe(data =>{
          console.log("success");
        },error => console.log(error));
        
      }
    }


// Function to handle import from Jira
getTasks(): Observable<any> { 
  return this.http.get<any>('https://pokerplaninghott.atlassian.net/rest/api/2/search?jql=project=PDPPH'); 
}
  
// Function to handle import from CSV
//importFromCSV() {
  // Add your logic for importing from CSV here
//}

  }
