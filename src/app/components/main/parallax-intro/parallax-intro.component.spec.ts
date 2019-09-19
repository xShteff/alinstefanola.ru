import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxIntroComponent } from './parallax-intro.component';

describe('ParallaxIntroComponent', () => {
  let component: ParallaxIntroComponent;
  let fixture: ComponentFixture<ParallaxIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
