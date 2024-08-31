import { Component, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  activeLink: string = '';
  iconAdmin: boolean = true
  iconProd: boolean = true

  constructor(private _render: Renderer2) {
    const storedLink = localStorage.getItem('activeLink');
    if (storedLink) {
      this.activeLink = storedLink;
    }
  }


  setActiveLink(link: string): void {
    this.activeLink = link;
    localStorage.setItem('activeLink', link);
  }

  openAdmin(enlaces: HTMLDivElement) {
    enlaces.classList.toggle('open')
    this.iconAdmin = !this.iconAdmin
  }

  openProducts(enlaces: HTMLDivElement) {
    enlaces.classList.toggle('open')
    this.iconProd = !this.iconProd
    }

}
