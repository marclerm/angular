import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodosComponentComponent } from './todos-component/todos-component.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'todos', component: TodosComponentComponent },
      { path: '**', redirectTo: '' },
      
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
