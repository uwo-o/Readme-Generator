var counter_usage_step=1;
var counter_usage_command=[];
var counter_usage_input=[];

if(counter_usage_step==1){
    $("#btn-delete-usage-step").hide();
}

$(".btn-add-usage-step").click(function(e){
    e.preventDefault();
    let html=`
    <div class="row" id="usage-step-`+counter_usage_step+`">\
        <div class="col-md-12">\
            <div class="form-group">\
                <div class="row">\
                    <h4>Step `+counter_usage_step+`</h4>\
                </div>\
                <div class="row">\
                    <label for="usage`+counter_usage_step+`-title">Title</label>\
                    <input type="text" class="form-control" name="usage`+counter_usage_step+`-title" id="usage`+counter_usage_step+`-title">\
                </div>\
                <div class="row">\
                    <label for="usage`+counter_usage_step+`-description">Description</label>\
                    <input name="usage`+counter_usage_step+`-description" class="form-control" id="usage`+counter_usage_step+`-description">\
                </div>\
                <div class="container" id="container-usage-commands-`+counter_usage_step+`">\
                </div>
                <div class="row">\
                <div class="col-md-2">\
                        <button class="btn btn-primary btn-add-usage-command" id="btn-add-usage-command-`+counter_usage_step+`">Add command</button>\
                    </div>\
                    <div class="col-md-2">\
                        <button class="btn btn-delete btn-delete-usage-command" id="btn-delete-usage-command-`+counter_usage_step+`">Delete command</button>\
                    </div>\
                </div>\
                <div class="container" id="container-usage-input-`+counter_usage_step+`">\
                </div>
                <div class="row">\
                <div class="col-md-2">\
                        <button class="btn btn-primary btn-add-usage-input" id="btn-add-usage-input-`+counter_usage_step+`">Add input</button>\
                    </div>\
                    <div class="col-md-2">\
                        <button class="btn btn-delete btn-delete-usage-input" id="btn-delete-usage-input-`+counter_usage_step+`">Delete input</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    `;
    $("#usage-container").append(html);
    $("#btn-delete-usage-step").show();
    counter_usage_step++;
    id_step=counter_usage_step-1;
    counter_usage_command[id_step]=counter_usage_command[id_step]?counter_usage_command[id_step]:1;
    counter_usage_input[id_step]=counter_usage_input[id_step]?counter_usage_input[id_step]:1;
    if(counter_usage_command[id_step]<=1){
        $("#btn-delete-usage-command-"+(counter_usage_step-1)).hide();
    }
    if(counter_usage_input[id_step]<=1){
        $("#btn-delete-usage-input-"+(counter_usage_step-1)).hide();
    }
});

$(document).on('click', '#btn-delete-usage-step', function(e){
    e.preventDefault();
    counter_usage_step--;
    $("#usage-step-"+counter_usage_step).remove();
    if(counter_usage_step<=1){
        $("#btn-delete-usage-step").hide();
        counter_usage_step=1;
    }
    counter_usage_command.pop();
});

$(document).on('click', '.btn-add-usage-command', function(e){
    e.preventDefault();
    let id_step=$(this).attr("id").split("-")[4];
    let html=`
    <div class="row" id="usage-`+id_step+`-command-`+counter_usage_command[id_step]+`">\
        <div class="col-md-12">\
            <div class="form-group">\
                <div class="row">\
                    <label>Command `+counter_usage_command[id_step]+`</label>\
                    <input type="text" class="form-control" name="usage`+id_step+`-command`+counter_usage_command[id_step]+`" id="usage`+id_step+`-command`+counter_usage_command[id_step]+`">\
                </div>\
            </div>\
        </div>\
    </div>\
`;
    $("#container-usage-commands-"+id_step).append(html);
    counter_usage_command[id_step]++;
    if(counter_usage_command[id_step]>1){
        $("#btn-delete-usage-command-"+id_step).show();
    }
});

$(document).on('click', '.btn-add-usage-input', function(e){
    e.preventDefault();
    let id_step=$(this).attr("id").split("-")[4];
    let html=`
    <div class="row" id="usage-`+id_step+`-input-`+counter_usage_input[id_step]+`">\
        <h4>Input `+counter_usage_input[id_step]+`</h4>\
        <div class="col-md-6">\
            <div class="form-group">\
                <div class="row">\
                    <label>Name</label>\
                    <input type="text" class="form-control" name="usage`+id_step+`-input`+counter_usage_input[id_step]+`" id="usage`+id_step+`-input`+counter_usage_input[id_step]+`">\
                </div>\
                <div class="row">\
                    <label>Url</label>\
                    <input type="text" class="form-control" name="usage`+id_step+`-input-url`+counter_usage_input[id_step]+`" id="usage`+id_step+`-input-url`+counter_usage_input[id_step]+`">\
                </div>\
            </div>\
        </div>\
        <div class="col-md-6">\
            <div class="form-group" style="height: 95%;">\
                <div class="row" style="height: 100%;">\
                    <label>Description</label>\
                    <textarea type="text" class="form-control" name="usage`+id_step+`-input-description`+counter_usage_input[id_step]+`" id="usage`+id_step+`-input-description`+counter_usage_input[id_step]+`"></textarea>\
                </div>\
            </div>\
        </div>\
    </div>\
`;
    $("#container-usage-input-"+id_step).append(html);
    counter_usage_input[id_step]++;
    if(counter_usage_input[id_step]>1){
        $("#btn-delete-usage-input-"+id_step).show();
    }
});

$(document).on('click', '.btn-delete-usage-command', function(e){
    e.preventDefault();
    let id_step=$(this).attr("id").split("-")[4];
    let id_command=$(this).attr("id").split("-")[5];
    counter_usage_command[id_step]--;
    $("#usage-"+id_step+"-command-"+counter_usage_command[id_step]).remove();
    if(counter_usage_command[id_step]<=1){
        counter_usage_command[id_step]=1;
        $("#btn-delete-usage-command-"+id_step).hide();
    }
});


$(document).on('click', '.btn-delete-usage-input', function(e){
    e.preventDefault();
    let id_step=$(this).attr("id").split("-")[4];
    let id_input=$(this).attr("id").split("-")[5];
    counter_usage_input[id_step]--;
    $("#usage-"+id_step+"-input-"+counter_usage_input[id_step]).remove();
    if(counter_usage_input[id_step]<=1){
        counter_usage_input[id_step]=1;
        $("#btn-delete-usage-input-"+id_step).hide();
    }
});