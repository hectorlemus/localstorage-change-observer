import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from './../../services/messages.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  form = new FormGroup({
    message: new FormControl('', [Validators.required]),
  });

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

  addMessage(): void {
    const message: string = this.form.value.message;
    if (message && message.trim().length > 0) {
      this.messagesService.addMessage(message);
    }

    const name  = 'message';
    this.form.controls[name].setValue('');
  }

}
