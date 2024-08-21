import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciosComponent } from './pages/inicios/inicios.component';
import { SkillComponent } from './pages/skill/skill.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciosComponent,
    SkillComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
