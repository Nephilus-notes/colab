import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { BioComponent } from './views/bio/bio.component';
import { ApiComponent } from './views/api/api.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
   { path: 'history', component: BioComponent },
   { path: 'api', component: ApiComponent },
   { path: 'projects', component: ProjectsComponent },
   { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
