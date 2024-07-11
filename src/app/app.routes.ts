import { Routes } from '@angular/router';
import { LayoutComponent } from '../view/layout/layout.component';
import { RxjsComponent } from '../rxjsOperator/rxjs/rxjs.component';
import { RxjsListComponent } from '../rxjsOperator/rxjs-list/rxjs-list.component';
import { IntervalComponent } from '../rxjsOperator/interval/interval.component';
import { TimerComponent } from '../rxjsOperator/timer/timer.component';
import { MapComponent } from '../rxjsOperator/map/map.component';
import { FromEventComponent } from '../rxjsOperator/from-event/from-event.component';
import { ToArrayComponent } from '../rxjsOperator/to-array/to-array.component';
import { FilterComponent } from '../rxjsOperator/filter/filter.component';
import { CustomobservalbleComponent } from '../rxjsOperator/customobservalble/customobservalble.component';
import { ProjectLayoutComponent } from '../view/project/project-layout/project-layout.component';
import { Component } from '@angular/core';
import { Project1Component } from '../view/project/project1/project1.component';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: 'full' },
    { path: "home", component: LayoutComponent },
    {
        path: "rxjs", component: RxjsComponent, children: [
            { path: '', component: RxjsListComponent },
            { path: 'fromevent', component: FromEventComponent },
            { path: 'interval', component: IntervalComponent },
            { path: 'timer', component: TimerComponent },
            { path: 'map', component: MapComponent },
            { path: 'toarray', component: ToArrayComponent },
            { path: 'filter', component: FilterComponent },
            { path: 'custom', component: CustomobservalbleComponent }
        ]
    },
    { path: 'project', component: ProjectLayoutComponent },
    { path: 'project1', component: Project1Component }

];
