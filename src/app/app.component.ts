import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,AboutComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  helloWorld: string = "hello worl form paris";
  pClassName = "text-danger";

  clickMe(){
    alert("beni tikladın!");
  }

  changeHelloWorldVariable(event:any){
    this.helloWorld = event.target.value;
  }  
}


