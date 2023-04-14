import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  tweetMessage: string = ""
  tweetMaxLength: number = 240
  tweetRemain: number = this.tweetMaxLength

  changeTweet() {
    this.tweetRemain = 240 - this.tweetMessage.length
  }

  sendTweet() {
    alert("Tweet Publicado :)")
  }

}
