/**
 * Created by adrianbadarau on 23/01/16.
 */

Template.admin_pages_manage.events({
    'click #save_page': function (event) {
        event.preventDefault();
        var data = $('#summernote').summernote('code');
        console.log(this);
        if (_.isUndefined(this.page)) {
            Pages.insert({
                title: $('#page_title').val(),
                content: data,
                created_at: new Date(),
                updated_at: new Date()
            });
        } else {
            Pages.update({_id: this.page._id}, {
                $set: {
                    title: $('#page_title').val(),
                    content: data,
                    widgets:{
                        'widget_price_table':"widget_price_table"
                    },
                    updated_at: new Date()
                }
            });
        }
    }
});

Template.admin_pages_manage.rendered = function () {
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

