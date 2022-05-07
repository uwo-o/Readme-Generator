var counter_installation_step=1;
var counter_installation_command=[];

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
                <div class="container" id="container-installarion-commands-`+counter_installation_step+`">\
                </div>
                <div class="row">\
                <div class="col-md-2">\
                        <button class="btn btn-primary btn-add-installation-command" id="btn-add-installation-command-`+counter_installation_step+`">Add command</button>\
                    </div>\
                    <div class="col-md-2">\
                        <button class="btn btn-delete btn-delete-installation-command" id="btn-delete-installation-command-`+counter_installation_step+`">Delete command</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    `;
    $("#installation-container").append(html);
    $("#btn-delete-installation-step").show();
    counter_installation_step++;
    id_step=counter_installation_step-1;
    counter_installation_command[id_step]=counter_installation_command[id_step]?counter_installation_command[id_step]:1;
    if(counter_installation_command[id_step]<=1){
        $("#btn-delete-installation-command-"+(counter_installation_step-1)).hide();
    }
});

$(document).on('click', '#btn-delete-installation-step', function(e){
    e.preventDefault();
    counter_installation_step--;
    $("#installation-step-"+counter_installation_step).remove();
    if(counter_installation_step<=1){
        $("#btn-delete-installation-step").hide();
        counter_installation_step=1;
    }
    counter_installation_command.pop();
});

$(document).on('click', '.btn-add-installation-command', function(e){
    e.preventDefault();
    let id_step=$(this).attr("id").split("-")[4];
    let html=`
    <div class="row" id="installation-`+id_step+`-command-`+counter_installation_command[id_step]+`">\
        <div class="col-md-12">\
            <div class="form-group">\
                <div class="row">\
                    <label>Command `+counter_installation_command[id_step]+`</label>\
                    <input type="text" class="form-control" name="step`+id_step+`-command`+counter_installation_command[id_step]+`" id="step`+id_step+`-command`+counter_installation_command[id_step]+`">\
                </div>\
            </div>\
        </div>\
    </div>\
`;
    $("#container-installarion-commands-"+id_step).append(html);
    counter_installation_command[id_step]++;
    if(counter_installation_command[id_step]>1){
        $("#btn-delete-installation-command-"+id_step).show();
    }
});


$(document).on('click', '.btn-delete-installation-command', function(e){
    e.preventDefault();
    let id_step=$(this).attr("id").split("-")[4];
    let id_command=$(this).attr("id").split("-")[5];
    counter_installation_command[id_step]--;
    $("#installation-"+id_step+"-command-"+counter_installation_command[id_step]).remove();
    if(counter_installation_command[id_step]<=1){
        counter_installation_command[id_step]=1;
        $("#btn-delete-installation-command-"+id_step).hide();
    }
});
