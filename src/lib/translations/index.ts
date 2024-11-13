import i18n, { type Config } from 'sveltekit-i18n';
//import parser from '@sveltekit-i18n/parser-icu';

//import type { Config } from '@sveltekit-i18n/parser-icu';

const config: Config = {
	//parser: parser({
	//ignoreTag: true
	//}),
	loaders: [
		{
			key: 'common',
			locale: 'en',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			key: 'login',
			locale: 'en',
			routes: ['/login'],
			loader: async () => (await import('./en/login.json')).default
		},
		{
			key: 'register',
			locale: 'en',
			routes: ['/register'],
			loader: async () => (await import('./en/register.json')).default
		},
		{
			key: 'header',
			locale: 'en',
			loader: async () => (await import('./en/header.json')).default
		}
	],
	fallbackLocale: 'en'
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
