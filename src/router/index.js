import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Show from '@/pages/show'
import Upload from '@/pages/upload'
import Album from '@/pages/album3D'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/album',
      name: 'Album',
      component: Album
    },
  ]
})
