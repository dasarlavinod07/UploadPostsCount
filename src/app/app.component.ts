import { Component, EventEmitter,Output} from '@angular/core';
import { Post } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 { 
  postCount=0;

  posts: Post[] = []

  title: string = '';
  content: string = '';  
  
  upload()
  {
    this.posts.push({title:this.title,content:this.content});
    this.postCount++;
  }
}
