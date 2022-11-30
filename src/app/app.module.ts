import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
	declarations: [AppComponent, NavbarComponent, TodosComponent],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
