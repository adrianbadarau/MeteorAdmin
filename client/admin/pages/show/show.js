/**
 * Created by adrianbadarau on 24/01/16.
 */

Template.admin_pages_show.onRendered(function(){
    console.log(this);
    //_.each(this.data.widgets,function(template_name, template_id){
    //    Blaze.renderWithData(Template[template_name],'',document.getElementById(template_id))
    //});
    $('#page_preview').summernote({
        airMode: true
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
