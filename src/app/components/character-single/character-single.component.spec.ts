import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSingleComponent } from './character-single.component';

describe('CharacterSingleComponent', () => {
  let component: CharacterSingleComponent;
  let fixture: ComponentFixture<CharacterSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
