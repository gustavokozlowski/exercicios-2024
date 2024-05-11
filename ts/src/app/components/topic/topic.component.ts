import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  icons = {
    add: "../../../assets/images/icone-criar.png",
    hand: '../../../assets/images/icone1.jpg',
    questions: '../../../assets/images/icone2.jpg',
    idea: '../../../assets/images/icone3.jpg',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
