import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  members: Member[];

  goToDetailPage(clickMember: Member) {
    this.router.navigate(['members', clickMember.id]);
  }

  constructor(private router: Router){}

}
