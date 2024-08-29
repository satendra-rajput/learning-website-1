import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-side',
  templateUrl: './admin-side.component.html',
  styleUrl: './admin-side.component.scss'
})
export class AdminSideComponent {

  panelOpenState = false;

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
          link_name: "Create New Post",
          icons: "add_circle",
          link: "/admin/create_post",
        }, {
          link_name: "Edit Post",
          icons: "edit_square",
          link: "/admin/post/:id",
        }, {
          link_name: "Post Lists",
          icons: "list_alt",
          link: "/admin/post_list",
        }
      ]
    },
    //Category link
    // {
    //   link_name: "Category",
    //   link: null,
    //   icon: "category",
    //   sub_menu: [
    //     {
    //       link_name: "Add New Category",
    //       icons: "add_circle",
    //       link: "/add-category",
    //     }, {
    //       link_name: "Edit Category",
    //       icons: "edit_square",
    //       link: "/category/:id",
    //     }, {
    //       link_name: "Category Lists",
    //       icons: "list_alt",
    //       link: "/category-lists",
    //     }
    //   ]
    // },
    //Article link
    {
      link_name: "Courses",
      link: null,
      icon: "post_add",
      sub_menu: [
        {
          link_name: "Add New course",
          icons: "add_circle",
          link: "/add-article",
        }, {
          link_name: "Edit course",
          icons: "edit_square",
          link: "/article/:id",
        }, {
          link_name: "Courses Lists",
          icons: "list_alt",
          link: "/article-lists",
        }
      ]
    },
    //Quizzes link
    {
      link_name: "Quizzes",
      link: null,
      icon: "quiz",
      sub_menu: [
        {
          link_name: "Add New Quiz",
          icons: "quiz",
          link: "/add-quiz",
        }, {
          link_name: "Edit Quiz",
          icons: "edit_square",
          link: "/quiz/:id",
        }, {
          link_name: "Quiz Lists",
          icons: "view_list",
          link: "/quiz-lists",
        }
      ]
    },

    //eBook link
    {
      link_name: "eBook",
      link: null,
      icon: "library_books",
      sub_menu: [
        {
          link_name: "Add New eBook",
          icons: "library_books",
          link: "/add-ebook",
        }, {
          link_name: "Edit eBook",
          icons: "border_color",
          link: "/ebook/:id",
        }, {
          link_name: "eBook Lists",
          icons: "list_alt",
          link: "/ebook-format_list_bulleted",
        }
      ]
    },

    //Exercises link
    {
      link_name: "Interview Questions",
      link: null,
      icon: "assignment_add",
      sub_menu: [
        {
          link_name: "Add New Interview Q",
          icons: "add_circle",
          link: "/add-exercise",
        }, {
          link_name: "Edit Interview Q",
          icons: "edit_square",
          link: "/exercise/:id",
        }, {
          link_name: "Interview Q Lists",
          icons: "list_alt",
          link: "/exercise-lists",
        }
      ]
    },

    //Courses link
    {
      link_name: "PathFinder",
      link: null,
      icon: "library_add",
      sub_menu: [
        {
          link_name: "Add New PathFinder",
          icons: "add_circle",
          link: "/add-course",
        }, {
          link_name: "Edit PathFinder",
          icons: "edit_square",
          link: "/course/:id",
        }, {
          link_name: "PathFinder Lists",
          icons: "list_alt",
          link: "/course-lists",
        }
      ]
    },

    //Blog link
    {
      link_name: "Problem-Solving",
      link: null,
      icon: "rss_feed",
      sub_menu: [
        {
          link_name: "Add New Pro-Solving",
          icons: "add_circle",
          link: "/add-blog",
        }, {
          link_name: "Edit Pro-Solving",
          icons: "edit_square",
          link: "/blog/:id",
        }, {
          link_name: "Pro-Solving Lists",
          icons: "list_alt",
          link: "/blog-lists",
        }
      ]
    },



  ]
}
