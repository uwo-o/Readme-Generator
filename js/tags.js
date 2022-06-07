let ul = $('.tag-box');
let languages_input = $('#languages');
let frameworks_input = $('#frameworks');
let keywords_input = $('#keywords');
let tag = $('.tag');

let languages_tags = [];
let frameworks_tags = [];
let keywords_tags = [];

languages_input.on('keyup', function (e) {
    if(e.keyCode == 13 || e.keyCode == 188 || e.keyCode == 32) {
        tag=languages_input.val().replace(/\s/g, '');
        if(tag) {
            let li = $('<li class="tag">'+tag.replace(/,/g,'')+'<div class="close-tag">x</div></li>');
            li.insertBefore(ul.find('#languages'));
            languages_input.val('');
            languages_tags.push(tag);
        }
    }
});

frameworks_input.on('keyup', function (e) {
    if(e.keyCode == 13 || e.keyCode == 188 || e.keyCode == 32) {
        tag=frameworks_input.val().replace(/\s/g, '');
        if(tag) {
            let li = $('<li class="tag">'+tag.replace(/,/g,'')+'<div class="close-tag">x</div></li>');
            li.insertBefore(ul.find('#frameworks'));
            frameworks_input.val('');
            frameworks_tags.push(tag);
        }
    }
});

keywords_input.on('keyup', function (e) {
    if(e.keyCode == 13 || e.keyCode == 188 || e.keyCode == 32) {
        tag=keywords_input.val().replace(/\s/g, '');
        if(tag) {
            let li = $('<li class="tag">'+tag.replace(/,/g,'')+'<div class="close-tag">x</div></li>');
            li.insertBefore(ul.find('#keywords'));
            keywords_input.val(''); 
            keywords_tags.push(tag);
        }
    }
});

ul.on('click', '.close-tag', function () {
    $(this).parent().remove();
    if($(this).parent().hasClass('languages')) {
        languages_tags.splice(languages_tags.indexOf($(this).text()), 1);
    }
    else if($(this).parent().hasClass('frameworks')) {
        frameworks_tags.splice(frameworks_tags.indexOf($(this).text()), 1);
    }
    else if($(this).parent().hasClass('keywords')) {
        keywords_tags.splice(keywords_tags.indexOf($(this).text()), 1);
    }
});