import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { render, RenderResult } from '@testing-library/angular';

import { SliderComponent } from './slider.component';

describe('MainComponent', () => {
  let component: RenderResult<SliderComponent>;

  beforeEach(async () => {
    component = await render(SliderComponent, {
      imports: [RouterTestingModule],
    });
  });

  it('should match snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });
});
