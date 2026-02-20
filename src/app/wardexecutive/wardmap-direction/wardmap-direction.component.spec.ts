import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardmapDirectionComponent } from './wardmap-direction.component';

describe('WardmapDirectionComponent', () => {
  let component: WardmapDirectionComponent;
  let fixture: ComponentFixture<WardmapDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WardmapDirectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WardmapDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
