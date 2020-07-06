import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicSingleComponent } from './comic-single.component';

describe('ComicSingleComponent', () => {
  let component: ComicSingleComponent;
  let fixture: ComponentFixture<ComicSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
