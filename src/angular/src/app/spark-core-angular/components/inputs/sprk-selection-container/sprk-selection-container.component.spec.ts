import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkSelectionContainerComponent } from './sprk-selection-container.component';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkInputDirective } from '../../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { By } from '@angular/platform-browser';

describe('SparkSelectionContainerComponent', () => {
  let component: SparkSelectionContainerComponent;
  let fixture: ComponentFixture<SparkSelectionContainerComponent>;
  let accordionElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkSelectionContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkSelectionContainerComponent);
    component = fixture.componentInstance;
    accordionElement = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(accordionElement.classList.toString()).toEqual('sprk-b-InputContainer sprk-u-man');
  })
});
