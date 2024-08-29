import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.scss'
})
export class DashboardSidebarComponent {

  menuSidebar = [
    // {
    //   link_name: "Dashboard",
    //   link: "/dashboard",
    //   icon: "bx bx-grid-alt",
    //   sub_menu: []
    // },
    {
      link_name: "Posts",
      link: null,
      icon: "person_add",
      sub_menu: [
        {
          link_name: "My Profile",
          icons: "account_circle",
          link: "/dashboard/my_profile",
        },
        {
          link_name: "My Courses",
          icons: "school",
          link: "/dashboard/my_courses",
        }, {
          link_name: "My Books",
          icons: "library_books",
          link: "/dashboard/my_books",
        }, {
          link_name: "My Classes",
          icons: "laptop_chromebook",
          link: "/dashboard/my_classes",
        }, {
          link_name: "My Orders",
          icons: "shopping_cart",
          link: "/dashboard/my_orders",
        }, {
          link_name: "My Courses Certificates",
          icons: "verified",
          link: "/dashboard/my_courses_certificates",
        }, {
          link_name: "My Test",
          icons: "quiz",
          link: "/dashboard/my_test",
        },  
        {
          link_name: "Free Courses",
          icons: "free_cancellation",
          link: "/dashboard/my_free_courses",
        },
      ]
    }
  ]
}
