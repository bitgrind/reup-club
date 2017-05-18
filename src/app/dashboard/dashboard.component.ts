import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { TaskService } from '../task.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MemberService, TaskService]
})

export class DashboardComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  tasks: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByRole: string = "allmembers";

  constructor(private router: Router, private memberService: MemberService, private taskService: TaskService){}

  ngOnInit() {
    this.members = this.memberService.getMembers();
    this.tasks = this.taskService.getTasks();
  }

  goToDetailPage(clickMember) {
    this.router.navigate(['members', clickMember.$key]);
  }

  onChange(optionFromMenu){
    console.log(optionFromMenu);
    this.filterByRole = optionFromMenu;
  }

}
