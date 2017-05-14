import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MemberService]
})

export class DashboardComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private memberService: MemberService){}

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(clickMember) {
    this.router.navigate(['members', clickMember.$key]);
  }

}
