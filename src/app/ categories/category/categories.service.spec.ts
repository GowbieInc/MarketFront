import { TestBed, inject } from '@angular/core/testing';

import { categoriesService } from './categories.service';

describe('categoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [categoriesService]
    });
  });

  it('should be created', inject([categoriesService], (service: categoriesService) => {
    expect(service).toBeTruthy();
  }));
});
