var counter_installation_step=1;

if(counter_installation_step==1){
    $("#btn-delete-installation-step").hide();
}

$(".btn-add-installation-step").click(function(e){
    e.preventDefault();
    let html=`
    <div class="row" id="installation-step-`+counter_installation_step+`">\
        <div class="col-md-12">\
            <div class="form-group">\
                <div class="row">\
                    <h4>Step `+counter_installation_step+`</h4>\
                </div>\
                <div class="row">\
                    <label for="step`+counter_installation_step+`-title">Title</label>\
                    <input type="text" class="form-control" name="step`+counter_installation_step+`-title" id="step`+counter_installation_step+`-title">\
                </div>\
                <div class="row">\
                    <label for="step`+counter_installation_step+`-description">Description</label>\
                    <input name="step`+counter_installation_step+`-description" class="form-control" id="step`+counter_installation_step+`-description">\
                </div>\
                <div class="row">\
                    <label for="step`+counter_installation_step+`-command">Command</label>\
                    <input type="text" class="form-control" name="step`+counter_installation_step+`-command" id="step`+counter_installation_step+`-command">\
                </div>\
            </div>\
        </div>\
    </div>\
    `;
    $("#installation-container").append(html);
    $("#btn-delete-installation-step").show();
    counter_installation_step++;
});

$(document).on('click', '#btn-delete-installation-step', function(e){
    e.preventDefault();
    counter_installation_step--;
    $("#installation-step-"+counter_installation_step).remove();
    if(counter_installation_step<=1){
        $("#btn-delete-installation-step").hide();
        counter_installation_step=1;
    }
});