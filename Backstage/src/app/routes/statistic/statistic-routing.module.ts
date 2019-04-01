import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticComponent } from './statistic.component';
import { StatisticFlowComponent } from './flow/flow.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticComponent,
    children: [
      { path: '', redirectTo: 'flow', pathMatch: 'full' },
      {
        path: 'flow',
        component: StatisticFlowComponent,
        data: { title: '流量统计' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticRoutingModule { }
