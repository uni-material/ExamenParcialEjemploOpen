import { TestBed } from '@angular/core/testing';

import { BaseFormComponentService } from './base-form.component.service';

describe('BaseFormComponentService', () => {
  let service: BaseFormComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseFormComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
