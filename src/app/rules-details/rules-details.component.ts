import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Rule } from '../rules/rule'
import { RuleService } from '../rules/rules.service'

@Component({
  selector: 'app-rules-details',
  templateUrl: './rules-details.component.html',
  styleUrls: ['./rules-details.component.css']
})
export class RulesDetailsComponent implements OnInit {
    rule: Rule;

  constructor(
    private ruleService: RuleService,
    private route: ActivatedRoute,
    private location: Location) { }

    ngOnInit(): void {
    
    }

    goBack(): void {
      this.location.back();
    }

}
