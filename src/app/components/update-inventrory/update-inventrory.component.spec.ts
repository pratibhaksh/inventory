import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInventroryComponent } from './update-inventrory.component';

describe('UpdateInventroryComponent', () => {
  let component: UpdateInventroryComponent;
  let fixture: ComponentFixture<UpdateInventroryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInventroryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInventroryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
