import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {

  Blogs =[
    {
      imgName:"/assets/images/support.svg",
      TitleName:"How to use service in angular?",
      LinkUrl:"",
    },

    {
      imgName:"/assets/images/support.svg",
      TitleName:"How to use Directives in angular?",
      LinkUrl:"",
    },

    {
      imgName:"/assets/images/support.svg",
      TitleName:"How to use Pipes in angular?",
      LinkUrl:"",
    },
    {
      imgName:"/assets/images/support.svg",
      TitleName:"How to use Components in angular?",
      LinkUrl:"",
    },

  ]
}
