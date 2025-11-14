import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardReplayComponent } from './ward-replay.component';

describe('WardReplayComponent', () => {
  let component: WardReplayComponent;
  let fixture: ComponentFixture<WardReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WardReplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WardReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
