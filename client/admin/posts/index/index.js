/**
 * Created by adrianbadarau on 24/01/16.
 */
Template.admin_posts_index.helpers({
    page_title:function(){
        return 'All Posts';
    }
});

Template.admin_posts_index.events({
    'click .delete_button':function(event){
        event.preventDefault();
        Posts.remove({_id:this._id});
    }
});