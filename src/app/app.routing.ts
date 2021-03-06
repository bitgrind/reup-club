import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { WelcomeComponent }       from './welcome/welcome.component';
import { AboutComponent }         from './about/about.component';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { MemberDetailComponent }  from './member-detail/member-detail.component';
import { AdminComponent }         from './admin/admin.component';
import { TaskComponent }         from './task/task.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'task',
    component: TaskComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);