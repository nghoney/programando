module.exports = {
  name: 'common-ui-cdk-accordion',
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/libs/common/ui/cdk/accordion',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
