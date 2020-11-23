import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWorksPanelComponent } from './how-works-panel.component';

describe('HowWorksPanelComponent', () => {
  let component: HowWorksPanelComponent;
  let fixture: ComponentFixture<HowWorksPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWorksPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWorksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
