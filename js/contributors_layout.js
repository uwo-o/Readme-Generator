var counter_contributors=1;

if(counter_contributors==1){
    $("#btn-delete-contributor").hide();
}

$('#btn-add-contributor').click(function(e){
    e.preventDefault();
    let contributors_html = `
    <div class="row" id="input-contributors-`+counter_contributors+`">\
        <div class="col-md-3">\
            <div class="row">\
                <label for="contributor-`+counter_contributors+`">Contributor `+counter_contributors+`</label>\
                <input type="text" class="form-control" name="contributor-`+counter_contributors+`" id="contributor-`+counter_contributors+`">\
            </div>\
        </div>\
        <div class="col-md-3">\
            <div class="row">\
                <div class="github-button">\
                    <label for="btn-github">Add</label>\
                    <button class="btn btn-github">GitHub</button>\
                </div>\
                <div class="github-input github-input-`+counter_contributors+`">\
                    <label for="github-input-`+counter_contributors+`">GitHub url</label>\
                    <input type="text" class="form-control" name="github-input-`+counter_contributors+`" id="github-input-`+counter_contributors+`">\
                </div>\
            </div>\
        </div>\
        <div class="col-md-3">\
            <div class="row">\
                <div class="linkedin-button">\
                    <label for="btn-linkedin">Add</label>\
                    <button class="btn btn-linkedin">LinkedIn</button>\
                </div>\
                <div class="linkedin-input linkedin-input-`+counter_contributors+`">\
                    <label for="linkedin-input-`+counter_contributors+`">LinkedIn url</label>\
                    <input type="text" class="form-control" name="linkedin-input-`+counter_contributors+`" id="linkedin-input-`+counter_contributors+`">\
                </div>\
            </div>\
        </div>\
        <div class="col-md-3">\
            <div class="row">\
                <div class="website-button">\
                    <label for="btn-website">Add</label>\
                    <button class="btn btn-website">Website</button>\
                </div>\
                <div class="website-input website-input-`+counter_contributors+`">\
                    <label for="website-input-`+counter_contributors+`">Website url</label>
                    <input type="text" class="form-control" name="website-input-`+counter_contributors+`" id="website-input-`+counter_contributors+`">\
                </div>\
            </div>\
        </div>\
    </div>\
    `;
    $('#contributors_container').append(contributors_html);
    counter_contributors++;
    $("#btn-delete-contributor").show();
});

$(document).on('click', '#btn-delete-contributor', function(e){
    e.preventDefault();
    counter_contributors--;
    if(counter_contributors<=1){
        counter_contributors=1;
        $(this).hide();
    }
    $("#input-contributors-"+counter_contributors).remove();
});

$(document).on('click', '.btn-github', function(e){
    e.preventDefault();
    $(this).parent().css('display', 'none');
    $(this).parent().next().css('display', 'block');
});

$(document).on('click', '.btn-linkedin', function(e){
    e.preventDefault();
    $(this).parent().css('display', 'none');
    $(this).parent().next().css('display', 'block');
});

$(document).on('click', '.btn-website', function(e){
    e.preventDefault();
    $(this).parent().css('display', 'none');
    $(this).parent().next().css('display', 'block');
});