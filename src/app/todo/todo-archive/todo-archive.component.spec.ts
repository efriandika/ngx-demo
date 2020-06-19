import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoArchiveComponent } from './todo-archive.component';

describe('TodoArchiveComponent', () => {
  let component: TodoArchiveComponent;
  let fixture: ComponentFixture<TodoArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
