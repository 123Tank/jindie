import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';

import { StatisticComponent } from './statistic.component';
import { StatisticFlowComponent } from './flow/flow.component';
import { StatisticRoutingModule } from './statistic-routing.module';

@NgModule({
  declarations: [StatisticComponent, StatisticFlowComponent],
  imports: [CommonModule, SharedModule, StatisticRoutingModule],
})
export class StatisticModule {}
