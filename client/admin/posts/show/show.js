/**
 * Created by adrianbadarau on 24/01/16.
 */
Template.admin_posts_show.onRendered(function(){
    console.log(this);
    $('#page_preview').summernote({
        airMode: true
    });
    $('#page_preview').on('summernote.change', function(we, contents, $editable) {
        console.log('summernote\'s content is changed.',we,contents);
    });

});

Template.admin_posts_show.events({
    'click #save_preview':function(event){
        event.preventDefault();
        Posts.update({_id:this._id},{
            $set:{
                content: $('#page_preview').summernote('code'),
                updated_at: new Date()
            }
        })
    }
});