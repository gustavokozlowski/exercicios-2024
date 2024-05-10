import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  url: string = "../../../assets/images/footer.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
