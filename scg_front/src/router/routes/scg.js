import Frame from '@views/partials/Frame'
import { $utils } from '@helper'

export default [{
  path: '/scg',
  component: Frame,
  fullpath: 'demo',
  // isHideInMenu: true,
  meta: {
    title: $utils.titleLang('示例模块', 'Assignments')
  },
  children: [
    {
      path: '/scg/question1',
      isHideInMenu: false,
      meta: {
        title: $utils.titleLang('示例表单', 'Number Sequence'),
        ignoreAuth: true
      },
      component: resolve => require(['@views/demo/question1'], resolve)
    },
    {
      path: '/scg/question2',
      meta: {
        title: $utils.titleLang('示例列表', 'Find Restaurants'),
        ignoreAuth: true
      },
      component: resolve => require(['@views/demo/question2'], resolve)
    }
  ]
}]
