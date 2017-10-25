import { TestBed, inject } from '@angular/core/testing';

import { NavTreeDataService } from './nav-tree-data.service';

describe('NavTreeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavTreeDataService]
    });
  });

  it('should be created', inject([NavTreeDataService], (service: NavTreeDataService) => {
    expect(service).toBeTruthy();
  }));
});
