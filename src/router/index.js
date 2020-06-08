import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import NewEmployee from '@/components/NewEmployee'
import EditEmployee from '@/components/EditEmployee'
import ViewEmployee from '@/components/ViewEmployee'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new_employee',
      component: NewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit_employee',
      component: EditEmployee
    },
    {
      path: '/:employee_id',
      name: 'view_employee',
      component: ViewEmployee
    }
  ]
})
