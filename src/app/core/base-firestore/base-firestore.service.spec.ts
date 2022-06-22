/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseFirestoreService } from './base-firestore.service';

describe('Service: BaseFirestore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseFirestoreService]
    });
  });

  it('should ...', inject([BaseFirestoreService], (service: BaseFirestoreService) => {
    expect(service).toBeTruthy();
  }));
});
