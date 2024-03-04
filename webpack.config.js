const path = require('path');

class ModuleSpyPlugin {
    apply(compiler) {
		compiler.hooks.make.tap("ModuleSpyPlugin", compilation => {
            compilation.hooks.succeedModule.tap("ModuleSpyPlugin", module => {
                console.log(`\nModule Information for "${module.rawRequest}":`);
                console.log(`- Raw Request: ${module.rawRequest}`);
                console.log(`- Build Meta:`, module.buildMeta);
                console.log(`-------------------------------------------\n`);
            });
		});
	}
}

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ModuleSpyPlugin()
  ]
};
