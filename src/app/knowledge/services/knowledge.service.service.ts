import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service.service";
import {Knowledge} from "../models/knowledge.entity";

@Injectable({
  providedIn: 'root'
})
export class KnowledgeServiceService extends BaseService<Knowledge>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = "/knowledge";
  }
}
