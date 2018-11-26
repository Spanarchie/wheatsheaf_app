import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopagePage } from './infopage.page';

describe('InfopagePage', () => {
  let component: InfopagePage;
  let fixture: ComponentFixture<InfopagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
