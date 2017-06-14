import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Rule } from './rule';
import { RULES } from './mock-rules';

import 'rxjs/add/operator/map'; // needed? /mh, 2017-06-13

@Injectable()
export class RuleService {
  addressRules: string;

  constructor(private http: Http) {
    this.addressRules = 'http://localhost:3000/api/rules';
  }

  getAllRules() { // get all rules
    return this.http.get(this.addressRules);
  }

  getSpecificRule(gameName: string) {
    let addressToRuleData = this.addressRules + '/' + gameName;

    return this.http.get(addressToRuleData);
  }
}