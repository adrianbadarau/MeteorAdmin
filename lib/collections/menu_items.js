 MenuItems = new Mongo.Collection('menu_items');

 Meteor.startup(function(){
    if (MenuItems.find().count() == 0){
        MenuItems.insert({
            label:'Home',
            route:'admin',
            icon: 'fa fa-home'
        });
        MenuItems.insert({
            label:'Pages',
            route:'admin.pages',
            icon: 'fa fa-file'
        });
        MenuItems.insert({
            label:'Posts',
            route:'admin.posts',
            icon: 'fa fa-file-text'
        });
    }
 });
