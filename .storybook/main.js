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
    }
};
