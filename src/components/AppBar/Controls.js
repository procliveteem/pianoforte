import FontAwesome from '@fortawesome/fontawesome';
import { Div, I } from 'glamorous';
import React, { Component } from 'react';

import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faPause from '@fortawesome/fontawesome-free-solid/faPause';
import faStepForward from '@fortawesome/fontawesome-free-solid/faStepForward';
import faStepBackward from '@fortawesome/fontawesome-free-solid/faStepBackward';

import { headerHeight } from '../../config/app';

FontAwesome.library.add(faPlay);
FontAwesome.library.add(faPause);
FontAwesome.library.add(faStepForward);
FontAwesome.library.add(faStepBackward);

export default class Controls extends Component {
  render() {
    return (
      <Div height="50%" display="flex" justifyContent="center">
        {[
          'fas fa-play',
          'fas fa-pause',
          'fas fa-step-forward',
          'fas fa-step-backward'
        ].map((c, i) => (
          <I key={i} className={c} fontSize={`${headerHeight / 3}vh`} />
        ))}
      </Div>
    );
  }
}