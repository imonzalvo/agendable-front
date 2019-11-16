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
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
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
  block: {
    defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
  },
  hash: false,
  targets: {
    ie: 11,
  },
  devtool: isAntDesignProPreview ? 'source-map' : false,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/BlankLayout',
  //     routes: [
  //       {
  //         path: '/',
  //         exact: true,
  //         component: './home',
  //       },
  //       {
  //         path: '/services',
  //         exact: true,
  //         component: './services',
  //       },
  //       {
  //         path: '/test-card',
  //         exact: true,
  //         component: './testCard',
  //       },
  //       {
  //         path: '/date-time-picker',
  //         exact: true,
  //         component: './testDateTimePicker',
  //       },
  //       {
  //         path: '/',
  //         component: '../layouts/AdminLayout',
  //         Routes: ['src/pages/Authorized'],
  //         routes: [
  //           {
  //             name: 'exception',
  //             icon: 'warning',
  //             path: '/exception',
  //             routes: [
  //               {
  //                 name: '403',
  //                 path: '/exception/403',
  //                 component: './exception/403',
  //               },
  //               {
  //                 name: '404',
  //                 path: '/exception/404',
  //                 component: './exception/404',
  //               },
  //               {
  //                 name: '500',
  //                 path: '/exception/500',
  //                 component: './exception/500',
  //               },
  //             ],
  //           },
  //           {
  //             path: '/',
  //             redirect: '/exception/404',
  //           },
  //           {
  //             component: '404',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ],
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
          path: '/a/:businessHandle',
          exact: true,
          component: './a/$businessHandle',
        },
        {
          path: '/a/:businessHandle/admin',
          exact: false,
          component: './a/$businessHandle/admin/_layout.tsx',
          routes: [
            {
              path: '/a/:businessHandle/admin',
              exact: true,
              component: './a/$businessHandle/admin',
            },
          ],
        },
        {
          path: '/a/:businessHandle/book',
          exact: false,
          component: './a/$businessHandle/book/_layout.tsx',
          routes: [
            {
              path: '/a/:businessHandle/book',
              exact: true,
              component: './a/$businessHandle/book',
            },
            {
              path: '/a/:businessHandle/confirm',
              exact: true,
              component: './a/$businessHandle/confirm',
            },
            {
              path: '/a/:businessHandle/book/select-branch',
              exact: true,
              component: './a/$businessHandle/book/select-branch',
            },
            {
              path: '/a/:businessHandle/book/select-professional',
              exact: true,
              component: './a/$businessHandle/book/select-professional',
            },
            {
              path: '/a/:businessHandle/book/select-date',
              exact: true,
              component: './a/$businessHandle/book/select-date',
            },
            {
              path: '/a/:businessHandle/book/select-service',
              exact: true,
              component: './a/$businessHandle/book/select-service',
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
          component: './a/$businessHandle/admin/_layout.tsx',
          routes: [
            {
              path: '/admin',
              exact: true,
              component: './a/$businessHandle/admin',
            },
          ],
        },
        {
          path: '/book',
          exact: false,
          component: './a/$businessHandle/book/_layout.tsx',
          routes: [
            {
              path: '/book',
              exact: true,
              component: './a/$businessHandle/book',
            },
            {
              path: '/confirm',
              exact: true,
              component: './a/$businessHandle/confirm',
            },
            {
              path: '/book/select-branch',
              exact: true,
              component: './a/$businessHandle/book/select-branch',
            },
            {
              path: '/book/select-professional',
              exact: true,
              component: './a/$businessHandle/book/select-professional',
            },
            {
              path: '/book/select-date',
              exact: true,
              component: './a/$businessHandle/book/select-date',
            },
            {
              path: '/book/select-service',
              exact: true,
              component: './a/$businessHandle/book/select-service',
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
} as IConfig;
