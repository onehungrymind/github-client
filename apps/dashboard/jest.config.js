module.exports = {
  name: 'dashboard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dashboard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
