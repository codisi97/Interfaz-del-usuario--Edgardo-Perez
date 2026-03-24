import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssgridexamen } from './cssgridexamen';

describe('Cssgridexamen', () => {
  let component: Cssgridexamen;
  let fixture: ComponentFixture<Cssgridexamen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cssgridexamen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssgridexamen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
