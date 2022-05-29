/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BibleStudyService } from './bible-study.service';

describe('Service: BibleStudy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibleStudyService]
    });
  });

  it('should ...', inject([BibleStudyService], (service: BibleStudyService) => {
    expect(service).toBeTruthy();
  }));
});
