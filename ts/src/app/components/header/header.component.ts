import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/@types/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User = {
    image: '../../../assets/images/user-image.jpg',
    email: 'alguem12@galoascience.com',
  }

  img = {
    dropdown: "../../../assets/images/dropdown.png",
    globe: "../../../assets/images/globe.png"
  }
  constructor(

  ) { }

  ngOnInit(): void {
  }

}
