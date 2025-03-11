import { combine, defineConfiguration, defineIgnores } from '@morev/eslint-config';

export default combine([
	defineIgnores(),
	defineConfiguration('javascript'),
	defineConfiguration('browser'),
	defineConfiguration('node'),
	defineConfiguration('jsx'),
	defineConfiguration('json'),
	defineConfiguration('markdown'),
	defineConfiguration('yaml'),
	defineConfiguration('html', {
		overrides: {
			'@html-eslint/attrs-newline': 'off',
			'@html-eslint/element-newline': 'off',
		},
	}),
	defineConfiguration('typescript', {}),
]);
