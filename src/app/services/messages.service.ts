import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private itemName = 'messages';
  private subject = new Subject();

  constructor() {
    // Add the event handler to the target
    window.addEventListener('storage', (e: any) => {
      if (e.key === this.itemName) {
        this.emitMessages();
        return true;
      }
    });
  }

  public getMessages(): Observable<any> {
    return this.subject.asObservable();
  }

  public addMessage(message: string): void {
    const messages: string[] = this.getSavedMessages();
    messages.push(message);
    localStorage.setItem(this.itemName, JSON.stringify(messages));

    this.emitMessages();
  }

  public deleteMessages(): void {
    localStorage.removeItem(this.itemName);
    this.emitMessages();
  }

  private emitMessages(): void {
    this.subject.next(this.getSavedMessages());
  }

  private getSavedMessages(): string[] {
    return JSON.parse(localStorage.getItem(this.itemName) || '[]');
  }

}


