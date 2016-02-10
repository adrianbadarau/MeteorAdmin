/**
 * Created by adrianbadarau on 24/01/16.
 */

Template.admin_pages_show.onRendered(function(){
    console.log(this);
    //_.each(this.data.widgets,function(template_name, template_id){
    //    Blaze.renderWithData(Template[template_name],'',document.getElementById(template_id))
    //});
    var HelloButton = function (context) {
        var ui = $.summernote.ui;

        // create button
        var button = ui.button({
            contents: '<i class="fa fa-cubes"/> Add Table',
            tooltip: 'hello',
            click: function () {
                // invoke insertText method with 'hello' on editor module.
                $('#page_preview').append("<div id='table_2'></div>");
                Blaze.render(Template.widget_price_table,document.getElementById('table_2'));
                $('#page_preview').summernote('reset');
            }
        });

        return button.render();   // return button as jquery object
    };

    $('#page_preview').summernote({
        airMode: true,
        popover: {
            air:[
                ['color', ['color']],
                ['font', ['bold', 'underline', 'clear']],
                ['para', ['ul', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture']],
                ['mybutton', ['hello']]
            ]
        },
        buttons: {
            hello: HelloButton
        }
    });
    $('.note-editor').contextmenu({
        target:'#context-menu',
        before: function(e,context) {
            // execute code before context menu if shown
        },
        onItem: function(context,e) {
            // execute on menu item selection
        }
    });
});


Template.admin_pages_show.events({
    'click #save_preview':function(event){
        event.preventDefault();
        Pages.update({_id:this._id},{
            $set:{
                content: $('#page_preview').summernote('code'),
                updated_at: new Date()
            }
        })
    },
    'click #add_widget':function(event){
        event.preventDefault();
        $('#page_preview').append("<div id='table_2'></div>");
        Blaze.render(Template.widget_price_table,document.getElementById('table_2'));
        $('#page_preview').summernote('reset');
    }
});
