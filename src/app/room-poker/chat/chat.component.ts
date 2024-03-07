import { Component } from '@angular/core';
import { ChatService } from '../Services/chat.service';
import { ChatMessage } from '../Models/chat-message';
import { ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../../user/Services/user-auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  messageInput: string = '';
  userId: number | null =this.userAuth.getUserId();
  messageList: any[] = [];

  constructor(private chatService: ChatService,
    private route: ActivatedRoute,
    private userAuth: UserAuthService){

  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params["user"];
    this.chatService.joinRoom("ABC");
    this.listenerMessage();
}


  sendMessage(){
    if (this.userId !== null) {
      const chatMessage: ChatMessage = {
          message: this.messageInput,
          user: this.userId.toString()
      };
      this.chatService.sendMessage("ABC", chatMessage);
  }
  this.messageInput = '';
  }

  listenerMessage(){
    this.chatService.getMessageSubject().subscribe((messages: any) => {
      this.messageList = messages.map((item: any) => ({
        ...item,
        message_side: item.user === this.userId ? 'sender': 'receiver'
      }))
    });
  }

}
