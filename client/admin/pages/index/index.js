/**
 * Created by adrianbadarau on 24/01/16.
 */
Template.admin_pages_index.helpers({
    page_title:function(){
        return 'Pages Index';
    }
});

Template.admin_pages_index.events({
    'click .delete_button':function(event){
        event.preventDefault();
        Pages.remove({_id:this._id});
    }
});