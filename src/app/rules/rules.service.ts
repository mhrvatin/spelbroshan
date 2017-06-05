import { Rule } from './rule';
import { RULES } from './mock-rules';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class RuleService {
    addressRules:string;
    constructor(private http: Http) {
        this.addressRules = 'http://localhost:3000/rules';
    }

    getRules() { //get all rules
        return this.http.get(this.addressRules)

    }

    getRule(name: string) {
        let addressToRuleData = this.addressRules + '/' + name;

        console.log("in get rule")
        return  this.http.get(addressToRuleData)
    }

}
