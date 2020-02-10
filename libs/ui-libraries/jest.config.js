module.exports = {
  name: 'ui-libraries',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-libraries',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
