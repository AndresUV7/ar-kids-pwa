import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.css']
})
export class RecoverPassComponent implements OnInit {

  token: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log(this.token)
  }

}
