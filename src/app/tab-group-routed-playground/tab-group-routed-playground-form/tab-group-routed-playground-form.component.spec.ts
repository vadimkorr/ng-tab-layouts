import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupRoutedPlaygroundFormComponent } from './tab-group-routed-playground-form.component';

describe('TabGroupRoutedPlaygroundFormComponent', () => {
  let component: TabGroupRoutedPlaygroundFormComponent;
  let fixture: ComponentFixture<TabGroupRoutedPlaygroundFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabGroupRoutedPlaygroundFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupRoutedPlaygroundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
