
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Category } from './models';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';




  openWhatsAppLink() {
    const link = "https://wa.me/7777777777";
    window.open(link, '_blank');
}

  openInstagram() {
    const instagramUrl = "https://instagram.com";
    window.open(instagramUrl, '_blank');
  }

}
