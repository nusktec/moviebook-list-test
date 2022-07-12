/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {MovieArrayEngine, NetworkAgent, ColorMixer} from '../core/Utils';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('test movie json', () => {
    let mn = new MovieArrayEngine.SorterAgent([]);
    console.log(mn.filterGenres())
});

it('color mixer', () => {

})

it('movie ranking test', () => {
    let mn = new MovieArrayEngine.SorterAgent([]);
    let tx = mn.filterMovies('Rian', true, true);
    //console.log(tx);//
});

it('should see network', function () {
    let mn = new NetworkAgent.RequestAgent();
});