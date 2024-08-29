import { Component } from '@angular/core';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrl: './technology-card.component.scss'
})
export class TechnologyCardComponent {

  highScore=[
    {
      imgName:"assets/icons/html5.svg",
      numberCount:"HTML",
      Para:"Blogs, Video, Example"
    },
  
    {
      imgName:"assets/icons/css.svg",
      numberCount:"CSS",
      Para:"Blogs, Video, Example"
    },
  
    {
      imgName:"assets/icons/js.svg",
      numberCount:"JavaScript",
      Para:"Blogs, Video, Example"
    },

    {
      imgName:"assets/icons/typescript.svg",
      numberCount:"TypeScript",
      Para:"Blogs, Video, Example"
    },
  
    {
      imgName:"assets/icons/angular.svg",
      numberCount:"Angular",
      Para:"Blogs, Video, Example"
    },

    {
      imgName:"assets/icons/node-js.svg",
      numberCount:"Node js",
      Para:"Blogs, Video, Example"
    },

    {
      imgName:"assets/icons/expressjs.svg",
      numberCount:"Express js",
      Para:"Blogs, Video, Example"
    },

    {
      imgName:"assets/icons/mongodb.svg",
      numberCount:"MongoDB",
      Para:"Blogs, Video, Example"
    },
  ]
  }
