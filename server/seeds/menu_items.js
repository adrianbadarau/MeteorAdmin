/**
 * Created by adrianbadarau on 23/01/16.
 */
Meteor.startup(function(){
    console.log(MenuItems.find().count());
    if (MenuItems.find().count() === 0){
        MenuItems.insert({
            label:'DashBoard',
            route:'admin',
            icon: 'fa fa-tachometer'
        });
        MenuItems.insert({
            label:'Pages',
            route:'admin.pages',
            icon: 'fa fa-file',
            action_button:{
                route:'admin.pages.create',
                icon:'fa fa-plus-square',
                label:'Add'
            }
        });
        MenuItems.insert({
            label:'Posts',
            route:'admin.posts',
            icon: 'fa fa-file-text',
            action_button:{
                route:'admin.posts.create',
                icon: 'fa fa-plus-square',
                label:'Add'
            }
        });
    }
});