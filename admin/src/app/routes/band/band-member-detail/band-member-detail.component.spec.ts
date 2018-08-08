import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandMemberDetailComponent } from './band-member-detail.component';

describe('BandMemberDetailComponent', () => {
  let component: BandMemberDetailComponent;
  let fixture: ComponentFixture<BandMemberDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandMemberDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandMemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
