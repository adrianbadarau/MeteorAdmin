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
        }
    });
    this.route('admin.pages.create', {
        path: 'admin/pages/create',
        template: 'admin_pages_manage'
    });
    this.route('admin.pages.edit',{
        path:'admin/pages/:_id',
        template: 'admin_pages_manage',
        data: function () {
            templateData = {
                page: Pages.findOne({_id:this.params._id})
            };
            return templateData;
        }
    });
});
