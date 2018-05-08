import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupPlaygroundFormComponent } from './tab-group-playground-form.component';

describe('TabGroupPlaygroundFormComponent', () => {
  let component: TabGroupPlaygroundFormComponent;
  let fixture: ComponentFixture<TabGroupPlaygroundFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabGroupPlaygroundFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupPlaygroundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
