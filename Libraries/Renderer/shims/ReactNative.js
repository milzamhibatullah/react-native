/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactNative
 * @flow
 */
'use strict';

const ReactNativeFeatureFlags = require('ReactNativeFeatureFlags');

import type {ReactNativeType} from 'ReactNativeTypes';

let ReactNative;

if (__DEV__) {
  ReactNative = ReactNativeFeatureFlags.useFiber
    ? require('ReactNativeFiber-dev')
    : require('ReactNativeStack-dev');
} else {
  ReactNative = ReactNativeFeatureFlags.useFiber
    ? require('ReactNativeFiber-prod')
    : require('ReactNativeStack-prod');
}

module.exports = (ReactNative: ReactNativeType);