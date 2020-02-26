module.exports = {
  optimize: true,
  paths: {
    public: 'dist',
    watched: ['src']
  },
  plugins: {
    babel: {
      presets: [
        [
          'env',
          {
            targets: {
              browsers: ['last 2 versions', 'safari >= 7']
            }
          }
        ]
      ]
    }
  },
  files: {
    javascripts: {
      entryPoints: {
        'src/index.js': 'index.bundle.js'
      }
    }
  }
};
