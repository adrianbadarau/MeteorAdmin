/**
 * Created by adrianbadarau on 22/01/16.
 */

Router.configure({
    layoutTemplate: "main"
});

Router.map(function () {
    this.route('admin', {
        path: '/admin'
    });
    this.route('admin.pages', {
        path: '/admin/pages',
        template: 'admin_pages_index',
        data: function () {
            templateData = {
                pages: Pages.find()
            };
            return templateData;
        },
        onAfterAction:function(){
            $('#summernote').summernote('destroy');
        }
    });
    this.route('admin.pages.create', {
        path: 'admin/pages/create',
        template: 'admin_pages_manage',
        onAfterAction:function(){
            $('#summernote').summernote('destroy');
        }
    });
    this.route('admin.pages.edit',{
        path:'admin/pages/:_id',
        template: 'admin_pages_manage',
        data: function () {
            templateData = {
                page: Pages.findOne({_id:this.params._id})
            };
            return templateData;
        },
        onAfterAction:function(){
            $('#summernote').summernote('destroy');
        }
    });
    this.route('admin.pages.show',{
        path:'admin/pages/:_id/preview',
        layoutTemplate: 'admin_pages_show',
        data:function(){
            return Pages.findOne({_id:this.params._id})
        }
    });

    this.route('admin.posts',{
        path:'admin/posts',
        template: 'admin_posts_index',
        data: function(){
            templateData = {
                posts : Posts.find()
            };
            return templateData;
        },
        onAfterAction:function(){
            $('#summernote').summernote('destroy');
        }
    });
    this.route('admin.posts.create',{
        path:'admin/posts/create',
        template: 'admin_posts_manage',
        onAfterAction:function(){
            $('#summernote').summernote('destroy');
        }
    });
    this.route('admin.posts.edit',{
        path:'admin/posts/:_id',
        template: 'admin_posts_manage',
        data: function(){
            return Posts.findOne({_id:this.params._id});
        },
        onAfterAction:function(){
            $('#summernote').summernote('destroy');
        }
    });
    this.route('admin.posts.show',{
        path:'admin/posts/:_id/preview',
        layoutTemplate:'admin_posts_show',
        data:function(){
            return Posts.findOne({_id:this.params._id})
        }
    })
});

