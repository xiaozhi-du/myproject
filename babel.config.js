module.exports = function (api) {
    api.cache(true);
  
    const presets = [
        '@babel/preset-env',
    ];
    const plugins = [
        
        ["component", 
          {
            "libraryName": "mint-ui",
            "style": true
          }
        ],
        '@babel/plugin-transform-arrow-functions',
        '@babel/plugin-transform-runtime',
        ['transform-remove-strict-mode']
    ];
  
    return {
      presets,
      plugins
    };
  }