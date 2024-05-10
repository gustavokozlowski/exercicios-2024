import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  video = "../../../assets/images/video.jpg";
  btn = {
    download: "../../../assets/images/download.png",
    doi: "../../../assets/images/doi.png",
    fav: "../../../assets/images/favoritar.png"
  }
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleShow(): void {
    this.show = true
  }
}
