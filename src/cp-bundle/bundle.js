function require() {
    console.log('cp-bundle require called');
    arguments[1]();
}
function chrometwo_require() {
    console.log('cp-bundle chrometwo_require called');
    arguments[1]();
}
console.log('cp-bundle bundle.js');

// window.chrometwo_require.done();
