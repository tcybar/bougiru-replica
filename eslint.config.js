import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // 無視するディレクトリの設定
  {
    ignores: [
      '**/fixtures/**',
      '**/dist/**',
      '**/node_modules/**',
      '**/public/**',
      '**/src/components/ui/**',
    ],
  },

  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,

  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },

  // prettierの設定(一番最後でオーバーライドする)
  eslintConfigPrettier,
];
