/**
 * Created by adrianbadarau on 23/01/16.
 */

Template.admin_pages_create.events({
    'click #save-page': function (event) {
        event.preventDefault();
        var data = $('#summernote').summernote('code');
        console.log(data);
    }
});

Template.admin_pages_create.rendered = function () {
    $('#summernote').summernote({
        height: 200,   // set editable area's height
        focus: true    // set focus editable area after Initialize summernote
    });
};

