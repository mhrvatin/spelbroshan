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
  getData: {};
  ruleDetail: {};

  constructor(private rulesService: RuleService) { }

  ngOnInit(): void {
    this.rulesService.getRules()
      .subscribe(
      data => this.getData = JSON.parse(data[Object.keys(data)[0]]),
      error => console.log(error),
      () => console.log("got rules")
      );

    console.log("getData: " + this.getData);
  }

  onRuleClick(rule: string) {
    this.rulesService.getRule(rule).subscribe(
      data => this.ruleDetail = JSON.parse(data[Object.keys(data)[0]]),
      error => console.log(error),
      () => console.log("got rules")
    );
    console.log("detta får jag från get");
    console.log(this.ruleDetail);
  }
}