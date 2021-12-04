const css_regex = '/\\.css$/';

module.exports = {
    stories: ['../packages/**/*.stories.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss')
                }
            }
        }
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5'
    },
    webpackFinal: async (config = {}, options = {}) => {
        const cssRule = config.module.rules.find((_) => _ && _.test && _.test.toString() === css_regex);

        return {
            ...config,
            module: {
                ...config.module,
                rules: [
                    ...config.module.rules.filter((_) => _ && _.test && _.test.toString() !== css_regex),
                    {
                        ...cssRule,
                        exclude: /\.module\.css$/
                    },
                    {
                        ...cssRule,
                        test: /\.module\.css$/,
                        use: cssRule.use.map((_) => {
                            if (_ && _.loader && _.loader.match(/[\/\\]css-loader/g)) {
                                return {
                                    ..._,
                                    options: {
                                        ..._.options,
                                        modules: {
                                            localIdentName: '[name]__[local]__[hash:base64:5]'
                                        }
                                    }
                                };
                            }

                            return _;
                        })
                    }
                ]
            }
        };
    }
};
