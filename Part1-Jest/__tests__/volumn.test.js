const formatVolumeIconPath = require('../assets/scripts/main');
const sum = require('../assets/scripts/main');

describe('volumn function test', () => {
    test('max volumn', () => {
      expect(formatVolumeIconPath(100)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });
  
    test('medium volumn', () => {
      expect(formatVolumeIconPath(50)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });

    test('low volumn', () => {
      expect(formatVolumeIconPath(10)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });

    test('no volumn', () => {
      expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });
  });