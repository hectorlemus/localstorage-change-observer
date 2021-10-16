import { MessagesService } from './../../services/messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: string[] = [];

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messagesService.getMessages().subscribe(resp => {
      this.messages = resp;
    });

  }

  deleteMessages(): void {
    this.messagesService.deleteMessages();
  }

}
