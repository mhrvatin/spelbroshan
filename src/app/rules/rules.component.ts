import { Component, OnInit } from '@angular/core';

import { Rule } from './rule'
import { RuleService } from './rules.service'

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
    rules: Rule[] = [];
    getData: string;

  constructor(private rulesService: RuleService) { }

  ngOnInit(): void {
    this.rulesService.getRules()
      .subscribe(
          data => this.getData = JSON.stringify(data),
          error => alert(error),
          () => console.log("got rules")
      )
  }

   log(name: string) {
    console.log("name pressed: " + name);
  }


}
