import { loadYAMLFile } from '../../src/common';

jest.mock('fs', () => {
  return {
    readFileSync: jest
      .fn()
      .mockReturnValueOnce('FIRST: a')
      .mockReturnValueOnce('FIRST: b'),
  };
});

describe('loadYAMLFile', () => {
  describe('when called', () => {
    it('should assign data to object process.env', () => {
      // Act
      loadYAMLFile();

      // Assert
      expect(process.env.FIRST).toEqual('b');
    });
  });
});
