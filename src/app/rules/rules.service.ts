import { Rule } from './rule';
import { RULES } from './mock-rules';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class RuleService {
    rules: Rule[] = [];

    constructor(private http: Http) {

    }

    getRules() { //get all rules
        return this.http.get('address')
                .map(res => res.json());
    }

    /*getRule(id: number): Promise<Rule> {
    return this.getRules()
               .then(rules => rules.find(rule => rule.id === id));
    }*/

}
