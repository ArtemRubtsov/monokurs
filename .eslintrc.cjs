module.exports = {
    extends: ['@rubtsov/eslint-config','plugin:storybook/recommended'],
    overrides: [
      {
        files: ['**/*.stories.tsx'],
        rules: {
          'no-console': 'off',
          'react-hooks/rules-of-hooks': 'off',
        },
      },
    ],
  }
