import { Component, OnInit } from '@angular/core';

import { Rule } from './rule';
import { RuleService } from './rules.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})

export class RulesComponent implements OnInit {
  rules: Rule[] = [];
  getGames: {};
  ruleDetail: {};

  constructor(private rulesService: RuleService) { }

  ngOnInit(): void {
    this.rulesService.getAllRules().subscribe(
      data => this.getGames = JSON.parse(data[Object.keys(data)[0]]),
      error => console.log(error),
      () => console.log("got rules")
    );
  }

  onRuleClick(gameName: string) {
    this.rulesService.getSpecificRule(gameName.toLowerCase()).subscribe(
      data => this.ruleDetail = JSON.parse(data[Object.keys(data)[0]]),
      error => console.log(error),
      () => console.log("got rules")
    );
  }
}