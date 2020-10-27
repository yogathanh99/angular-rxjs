import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { render, RenderResult } from '@testing-library/angular';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: RenderResult<MainComponent>;

  beforeEach(async () => {
    component = await render(MainComponent, {
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  it('should match snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });
});
