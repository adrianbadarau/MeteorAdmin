/**
 * Created by adrianbadarau on 22/01/16.
 */

Router.configure({
    layoutTemplate:"main"
});

Router.map(function(){
    this.route('admin',{
        path:'/admin'
    });
    this.route('admin.pages',{
        path:'/admin/pages',
        template:'admin_pages_index'
    });
    this.route('admin.pages.create',{
        path:'admin/pages/create',
        template: 'admin_pages_create'
    })
});
