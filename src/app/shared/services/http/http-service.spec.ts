import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HttpService } from './http.service';
import { AuthorizationService } from '../authorization/authorization.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HttpService', () => {
  let httpService: HttpService;
  let authorizationService: jasmine.SpyObj<AuthorizationService>;
  let httpMock: HttpTestingController;

  beforeAll(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(() => {
    const authorizationServiceServiceSpy = jasmine.createSpyObj("AuthorizationService", ["getCredencials"])

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpService,
        { provide: AuthorizationService, useValue: authorizationServiceServiceSpy }
      ]
    });

    httpService = TestBed.get(HttpService);
    authorizationService = TestBed.get(AuthorizationService);
    httpMock = TestBed.get(HttpTestingController);
  });
});