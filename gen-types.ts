// https://www.npmjs.com/package/dts-generator
require('dts-generator').default({
    prefix: '',
    project: '.',
    out: 'src/index.d.ts',
    exclude: ['**/*.d.ts', '**/*.spec.ts']
});