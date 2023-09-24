import { TestBed } from '@angular/core/testing';

import { GameScoreHubService } from './game-score-hub.service';

describe('GameScoreHubService', () => {
  let service: GameScoreHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameScoreHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
