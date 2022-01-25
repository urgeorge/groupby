import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let navigationService: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationService],
    });
    navigationService = TestBed.inject(NavigationService);
  });

});
