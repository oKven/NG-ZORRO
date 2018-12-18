import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmodalComponent } from './showmodal.component';

describe('ShowmodalComponent', () => {
  let component: ShowmodalComponent;
  let fixture: ComponentFixture<ShowmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
