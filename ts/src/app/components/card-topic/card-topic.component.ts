import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-topic',
  templateUrl: './card-topic.component.html',
  styleUrls: ['./card-topic.component.scss']
})
export class CardTopicComponent implements OnInit {
  icon = {
    more: "../../../assets/images/more-info.jpg",
    favorite: '../../../assets/images/fav-topic.jpg',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
