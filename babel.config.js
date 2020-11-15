module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      'babel-preset-expo',
      'module:metro-react-native-babel-preset',
      'airbnb',
    ],
  };
};
