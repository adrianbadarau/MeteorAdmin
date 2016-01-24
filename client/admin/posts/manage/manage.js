/**
 * Created by adrianbadarau on 24/01/16.
 */

Template.admin_posts_manage.events({
    'click #save_post': function (event) {
        event.preventDefault();
        var data = $('#summernote').summernote('code');
        console.log(this);
        if (_.isUndefined(this._id)) {
            Posts.insert({
                title: $('#post_title').val(),
                content: data,
                created_at: new Date(),
                updated_at: new Date()
            });
        } else {
            Posts.update({_id: this._id}, {
                $set: {
                    title: $('#post_title').val(),
                    content: data,
                    updated_at: new Date()
                }
            });
        }
    }
});

Template.admin_posts_manage.rendered = function () {
    console.log(this);
    if (_.isUndefined(this.data)) {
        $('#summernote').summernote({
            height: 200,   // set editable area's height
            focus: true    // set focus editable area after Initialize summernote
        });
    } else {
        //$('#summernote').html(this.data.page.content);
        $('#summernote').summernote({height: 300});
    }
};


