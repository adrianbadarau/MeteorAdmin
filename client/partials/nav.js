/**
 * Created by adrianbadarau on 22/01/16.
 */

Template.nav_bar.helpers({
    nav_items: function(){
        return MenuItems.find({});
    }
});