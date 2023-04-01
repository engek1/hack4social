import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: 'category/:name',
    component: CategoryComponent,
  },
  {
    path: "overview",
    component: OverviewComponent,
  },
  { path: '',   redirectTo: '/overview', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // useHash: true,
      // enableTracing: true // <-- debugging purposes only
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
