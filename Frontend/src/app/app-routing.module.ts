import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { NewHysComponent } from './componentes/hys/new-hys.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'nuevaexp', component: NewExperienciaComponent},
{path: 'nuevaedu', component: NewEducacionComponent},
{path: 'nuevaskill', component: NewHysComponent },
{path: 'editexp/:id', component: EditExperienciaComponent},
{path: 'editedu/:id', component: EditEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
