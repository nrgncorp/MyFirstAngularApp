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
  helloWorld: string = "Anonymus";
  pClassName = "text-danger";

  clickMe(){
    alert("Geçersiz Ajan Kaydı!");
  }

  changeHelloWorldVariable(event:any){
    this.helloWorld = event.target.value;
  }  
}


