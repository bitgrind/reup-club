import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [MemberService]
})
export class AboutComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

}
