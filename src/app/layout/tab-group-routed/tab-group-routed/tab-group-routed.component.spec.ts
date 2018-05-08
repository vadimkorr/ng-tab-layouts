import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupRoutedComponent } from './tab-group-routed.component';

describe('TabGroupRoutedComponent', () => {
  let component: TabGroupRoutedComponent;
  let fixture: ComponentFixture<TabGroupRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabGroupRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
