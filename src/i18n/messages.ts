import type { Locale } from './locales';

interface Dict {
  blog: {
    allAuthors: string;
    allKeywords: string;
    by: string;
    filterAuthor: string;
    filterKeyword: string;
    lastUpdatedOn: string;
    search: string;
    searchPlaceholder: string;
  };
  languageName: string;
  nav: { about: string; authors: string; blog: string; home: string };
  ui: {
    language: string;
    opensInNewTab: string;
    skipToContent: string;
    themeDark: string;
    themeLight: string;
    toggleTheme: string;
  };
}

export const messages = {
  en: {
    blog: {
      allAuthors: 'All authors',
      allKeywords: 'All keywords',
      by: 'By',
      filterAuthor: 'Filter by author',
      filterKeyword: 'Filter by keyword',
      lastUpdatedOn: 'Last updated on',
      search: 'Search posts',
      searchPlaceholder: 'Search title, description, keywords…',
    },
    languageName: 'English',
    nav: { about: 'About', authors: 'Authors', blog: 'Blog', home: 'Home' },
    ui: {
      language: 'Language',
      opensInNewTab: 'opens in a new tab',
      skipToContent: 'Skip to content',
      themeDark: 'Theme: Dark',
      themeLight: 'Theme: Light',
      toggleTheme: 'Toggle theme',
    },
  },
  es: {
    blog: {
      allAuthors: 'Todos los autores',
      allKeywords: 'Todas las palabras clave',
      by: 'Por',
      filterAuthor: 'Filtrar por autor',
      filterKeyword: 'Filtrar por palabra clave',
      lastUpdatedOn: 'Última actualización el',
      search: 'Buscar publicaciones',
      searchPlaceholder: 'Buscar título, descripción, palabras clave…',
    },
    languageName: 'Español',
    nav: { about: 'Acerca de', authors: 'Autores', blog: 'Blog', home: 'Inicio' },
    ui: {
      language: 'Idioma',
      opensInNewTab: 'se abre en una nueva pestaña',
      skipToContent: 'Saltar al contenido',
      themeDark: 'Tema: Oscuro',
      themeLight: 'Tema: Claro',
      toggleTheme: 'Cambiar tema',
    },
  },
  ja: {
    blog: {
      allAuthors: 'すべての著者',
      allKeywords: 'すべてのキーワード',
      by: '著者',
      filterAuthor: '著者で絞り込み',
      filterKeyword: 'キーワードで絞り込み',
      lastUpdatedOn: '最終更新',
      search: '投稿を検索',
      searchPlaceholder: 'タイトル、説明、キーワードを検索…',
    },
    languageName: '日本語',
    nav: { about: '概要', authors: '著者', blog: 'ブログ', home: 'ホーム' },
    ui: {
      language: '言語',
      opensInNewTab: '新しいタブで開きます',
      skipToContent: '本文へスキップ',
      themeDark: 'テーマ: ダーク',
      themeLight: 'テーマ: ライト',
      toggleTheme: 'テーマを切り替え',
    },
  },
  ru: {
    blog: {
      allAuthors: 'Все авторы',
      allKeywords: 'Все ключевые слова',
      by: 'Автор',
      filterAuthor: 'Фильтр по автору',
      filterKeyword: 'Фильтр по ключевому слову',
      lastUpdatedOn: 'Последнее обновление',
      search: 'Поиск по постам',
      searchPlaceholder: 'Поиск по заголовку, описанию, ключевым словам…',
    },
    languageName: 'Русский',
    nav: { about: 'Обо мне', authors: 'Авторы', blog: 'Блог', home: 'Главная' },
    ui: {
      language: 'Язык',
      opensInNewTab: 'откроется в новой вкладке',
      skipToContent: 'Перейти к содержимому',
      themeDark: 'Тема: Тёмная',
      themeLight: 'Тема: Светлая',
      toggleTheme: 'Переключить тему',
    },
  },
  zh: {
    blog: {
      allAuthors: '所有作者',
      allKeywords: '所有关键词',
      by: '作者',
      filterAuthor: '按作者筛选',
      filterKeyword: '按关键词筛选',
      lastUpdatedOn: '最后更新于',
      search: '搜索文章',
      searchPlaceholder: '搜索标题、描述、关键词…',
    },
    languageName: '中文',
    nav: { about: '关于', authors: '作者', blog: '博客', home: '首页' },
    ui: {
      language: '语言',
      opensInNewTab: '在新标签页中打开',
      skipToContent: '跳到主要内容',
      themeDark: '主题: 深色',
      themeLight: '主题: 浅色',
      toggleTheme: '切换主题',
    },
  },
} as const satisfies Record<Locale, Dict>;

export type MessageKey =
  | 'blog.allAuthors'
  | 'blog.allKeywords'
  | 'blog.by'
  | 'blog.filterAuthor'
  | 'blog.filterKeyword'
  | 'blog.lastUpdatedOn'
  | 'blog.search'
  | 'blog.searchPlaceholder'
  | 'languageName'
  | 'nav.about'
  | 'nav.authors'
  | 'nav.blog'
  | 'nav.home'
  | 'ui.language'
  | 'ui.opensInNewTab'
  | 'ui.skipToContent'
  | 'ui.themeDark'
  | 'ui.themeLight'
  | 'ui.toggleTheme';

export function t(locale: Locale, key: MessageKey): string {
  const dict = messages[locale] ?? messages.en;
  switch (key) {
    case 'blog.allAuthors':
      return dict.blog.allAuthors;
    case 'blog.allKeywords':
      return dict.blog.allKeywords;
    case 'blog.by':
      return dict.blog.by;
    case 'blog.filterAuthor':
      return dict.blog.filterAuthor;
    case 'blog.filterKeyword':
      return dict.blog.filterKeyword;
    case 'blog.lastUpdatedOn':
      return dict.blog.lastUpdatedOn;
    case 'blog.search':
      return dict.blog.search;
    case 'blog.searchPlaceholder':
      return dict.blog.searchPlaceholder;
    case 'languageName':
      return dict.languageName;
    case 'nav.about':
      return dict.nav.about;
    case 'nav.authors':
      return dict.nav.authors;
    case 'nav.blog':
      return dict.nav.blog;
    case 'nav.home':
      return dict.nav.home;
    case 'ui.language':
      return dict.ui.language;
    case 'ui.opensInNewTab':
      return dict.ui.opensInNewTab;
    case 'ui.skipToContent':
      return dict.ui.skipToContent;
    case 'ui.themeDark':
      return dict.ui.themeDark;
    case 'ui.themeLight':
      return dict.ui.themeLight;
    case 'ui.toggleTheme':
      return dict.ui.toggleTheme;
    default: {
      const exhaustive: never = key;
      return exhaustive;
    }
  }
}
