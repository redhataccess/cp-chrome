#!/usr/bin/env bash

echo "console.log('cp-chrome: adding webcomponents polyfill');" > src/cp-chrome/init.js
cat src/bower_components/webcomponentsjs/webcomponents-lite.js >> src/cp-chrome/init.js
# cat src/assets/j/lib/require.js >> src/cp-chrome/init.js
# cat src/cp-chrome/c2r-compat.js >> src/cp-chrome/init.js
