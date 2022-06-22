/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BibleTopicService } from './bible-topic.service';

describe('Service: BibleTopic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibleTopicService]
    });
  });

  it('should ...', inject([BibleTopicService], (service: BibleTopicService) => {
    expect(service).toBeTruthy();
  }));
});
