const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration for React Native
 * Enables SVG support via react-native-svg-transformer
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...new Set([...sourceExts, 'svg'])], // dùng Set để tránh trùng
  },
};

module.exports = mergeConfig(defaultConfig, config);
