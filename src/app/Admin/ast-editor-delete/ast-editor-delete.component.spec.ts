import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstEditorDeleteComponent } from './ast-editor-delete.component';

describe('AstEditorDeleteComponent', () => {
  let component: AstEditorDeleteComponent;
  let fixture: ComponentFixture<AstEditorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AstEditorDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstEditorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
