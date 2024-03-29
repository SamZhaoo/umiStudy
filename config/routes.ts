export default [
  {
    path: '/login',
    wrappers: ['@/wrappers/auth'],
    component: '@/pages/login/index',
  },
  {
    path: '/',
    component: '@/layouts/base-layout/index',
    routes: [
      {
        path: '/hooks',
        component: '@/layouts/aside-layout/index',
        routes: [
          {
            path: '/hooks/useContext',
            component: '@/pages/hooks/useContext/index',
          },
          { path: '/hooks/useMemo', component: '@/pages/hooks/useMemo/index' },
          { path: '/hooks/memo', component: '@/pages/hooks/memo/index' },
          {
            path: '/hooks/useCallback',
            component: '@/pages/hooks/useCallback/index',
          },
          { path: '/hooks/useRef', component: '@/pages/hooks/useRef/index' },
          { path: '/hooks/test', component: '@/pages/hooks/test/index' },
          { path: '/hooks/login/:id', component: '@/pages/login/index' },
        ],
      },
      {
        path: '/practice',
        component: '@/layouts/aside-layout/index',
        routes: [
          {
            path: '/practice/mock',
            component: '@/pages/practice/mock/index',
          },
          {
            path: '/practice/greedySnake',
            component: '@/pages/practice/greedySnake/index.tsx',
          },
          {
            path: '/practice/hooksSnake',
            component: '@/pages/practice/hooksSnake/index.jsx',
          },
        ],
      },
    ],
  },
  { path: '/', redirect: '/hooks' },
  { path: '/404', component: '@/pages/404' },
  { component: '@/pages/404' },
];
