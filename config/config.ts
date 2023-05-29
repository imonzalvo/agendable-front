import { IConfig, IPlugin } from 'umi-types';
import slash from 'slash2';

import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import webpackPlugin from './plugin.config';

const { pwa, primaryColor } = defaultSettings;

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';

const plugins: IPlugin[] = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        enable: true,
        default: 'en-US',
        baseNavigator: true,
      },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];

export default {
  plugins,
  hash: false,
  targets: {
    ie: 11,
  },
  devtool: isAntDesignProPreview ? 'source-map' : false,
  routes: [
    {
      path: '/',
      component: '../layouts',
      routes: [
        {
          path: '/404',
          exact: true,
          component: './404',
        },
        {
          path: '/app/:businessHandle',
          exact: true,
          component: './app/$businessHandle',
        },
        {
          path: '/app/:businessHandle/admin',
          exact: false,
          component: './app/$businessHandle/admin/_layout.tsx',
          routes: [
            {
              path: '/app/:businessHandle/admin',
              exact: true,
              component: './app/$businessHandle/admin',
            },
            {
              path: '/app/:businessHandle/admin/settings',
              exact: false,
              component: './app/$businessHandle/admin/settings/_layout.tsx',
              routes: [
                {
                  path: '/app/:businessHandle/admin/settings/business',
                  exact: true,
                  component: './app/$businessHandle/admin/settings/business',
                },
                {
                  path: '/app/:businessHandle/admin/settings/branches',
                  exact: true,
                  component: './app/$businessHandle/admin/settings/branches',
                },
                {
                  path: '/app/:businessHandle/admin/settings/services',
                  exact: true,
                  component: './app/$businessHandle/admin/settings/services',
                },
                {
                  path: '/app/:businessHandle/admin/settings/employees',
                  exact: true,
                  component: './app/$businessHandle/admin/settings/employees',
                },
              ],
            },
            {
              path: '/app/:businessHandle/admin/landing-settings',
              exact: false,
              component: './app/$businessHandle/admin/landing-settings/_layout.tsx',
              routes: [
                {
                  path: '/app/:businessHandle/admin/landing-settings',
                  exact: true,
                  component: './app/$businessHandle/admin/landing-settings',
                },
              ],
            },
          ],
        },
        {
          path: '/app/:businessHandle/book/success',
          exact: true,
          component: './app/$businessHandle/book/success',
        },
        {
          path: '/app/:businessHandle/book/summary',
          exact: true,
          component: './app/$businessHandle/book/summary',
        },
        {
          path: '/app/:businessHandle/book',
          exact: false,
          component: './app/$businessHandle/book/_layout.tsx',
          routes: [
            {
              path: '/app/:businessHandle/book',
              exact: true,
              component: './app/$businessHandle/book',
            },
            {
              path: '/app/:businessHandle/book/confirm',
              exact: true,
              component: './app/$businessHandle/book/confirm',
            },
            {
              path: '/app/:businessHandle/book/select-branch',
              exact: true,
              component: './app/$businessHandle/book/select-branch',
            },
            {
              path: '/app/:businessHandle/book/select-professional',
              exact: true,
              component: './app/$businessHandle/book/select-professional',
            },
            {
              path: '/app/:businessHandle/book/select-date',
              exact: true,
              component: './app/$businessHandle/book/select-date',
            },
            {
              path: '/app/:businessHandle/book/select-service',
              exact: true,
              component: './app/$businessHandle/book/select-service',
            },
          ],
        },
        {
          path: '/exception/403',
          exact: true,
          component: './exception/403',
        },
        {
          path: '/exception/404',
          exact: true,
          component: './exception/404',
        },
        {
          path: '/exception/500',
          exact: true,
          component: './exception/500',
        },
        {
          path: '/',
          exact: true,
          component: './',
        },
        {
          path: '/admin',
          exact: false,
          component: './app/$businessHandle/admin/_layout.tsx',
          routes: [
            {
              path: '/admin',
              exact: true,
              component: './app/$businessHandle/admin',
            },
          ],
        },
        {
          path: '/book/success',
          exact: true,
          component: './app/$businessHandle/book/success',
        },
        {
          path: '/book/summary',
          exact: true,
          component: './app/$businessHandle/book/summary',
        },
        {
          path: '/book',
          exact: false,
          component: './app/$businessHandle/book/_layout.tsx',
          routes: [
            {
              path: '/book',
              exact: true,
              component: './app/$businessHandle/book',
            },
            {
              path: '/book/confirm',
              exact: true,
              component: './app/$businessHandle/book/confirm',
            },
            {
              path: '/book/select-branch',
              exact: true,
              component: './app/$businessHandle/book/select-branch',
            },
            {
              path: '/book/select-professional',
              exact: true,
              component: './app/$businessHandle/book/select-professional',
            },
            {
              path: '/book/select-date',
              exact: true,
              component: './app/$businessHandle/book/select-date',
            },
            {
              path: '/book/select-service',
              exact: true,
              component: './app/$businessHandle/book/select-service',
            },
          ],
        },
        {
          path: '/testCard',
          exact: true,
          component: './testCard',
        },
        {
          path: '/testDateTimePicker',
          exact: true,
          component: './testDateTimePicker',
        },
      ],
    },
  ],
  theme: {
    'primary-color': primaryColor,
  },
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '',
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (
      context: {
        resourcePath: string;
      },
      _: string,
      localName: string,
    ) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
          .map((a: string) => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackPlugin,
  // base: '/app',
  publicPath: '/app/',
  // runtimePublicPath: true,
} as IConfig;
