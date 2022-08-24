import { loadYAMLFile } from '../../src/common';

jest.mock('fs', () => {
  return {
    existsSync: () => true,
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
      loadYAMLFile('a', 'b');

      // Assert
      expect(process.env.FIRST).toEqual('b');
    });
  });
});
