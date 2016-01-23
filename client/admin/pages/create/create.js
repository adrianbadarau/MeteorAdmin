/**
 * Created by adrianbadarau on 23/01/16.
 */

Template.admin_pages_create.events({
    'click #save_page': function (event) {
        event.preventDefault();
        var data = $('#summernote').summernote('code');
        console.log(this);
        if(_.isUndefined(this.page._id)){
            var page = Pages.insert({
                title: $('#page_title').val(),
                content: data,
                created_at: new Date(),
                updated_at: new Date()
            });
        }else{
            var page = Pages.update({_id:this.page._id},{
                $set:{
                    title:$('#page_title').val(),
                    content:data,
                    updated_at: new Date()
                }
            })
        }
    }
});

Template.admin_pages_create.rendered = function () {
    console.log(this);
    if(_.isUndefined(this.data.page._id)){
        $('#summernote').summernote({
            height: 200,   // set editable area's height
            focus: true    // set focus editable area after Initialize summernote
        });
    }else{
        //$('#summernote').html(this.data.page.content);
        $('#summernote').summernote({height: 300});
    }
};

