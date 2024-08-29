import { Component } from '@angular/core';

@Component({
  selector: 'app-free-course-card',
  templateUrl: './free-course-card.component.html',
  styleUrl: './free-course-card.component.scss'
})
export class FreeCourseCardComponent {
  PaidCourse=[
    {
      imgName:"/assets/images/support.svg",
      TitleName:"HTML in Hindi",
      paidIcons:"open",
      categories:"10 Lessons",
      footerIcons:"open",
      CountInterest:"Free",
      Discount:"",
    },

    {
      imgName:"/assets/images/support.svg",
      TitleName:"CSS in Hindi",
      paidIcons:"open",
      categories:"25 Lessons",
      footerIcons:"open",
      CountInterest:"Free",
      Discount:"",
    },

    {
      imgName:"/assets/images/support.svg",
      TitleName:"JavaScript in Hindi",
      paidIcons:"open",
      categories:"55 Lessons",
      footerIcons:"open",
      CountInterest:"Free",
      Discount:"",
    },
    {
      imgName:"/assets/images/support.svg",
      TitleName:"Angular in Hindi",
      paidIcons:"open",
      categories:"76 Lessons",
      footerIcons:"open",
      CountInterest:"₹ 10000",
      Discount:"₹12000",
    },

  ]
}
