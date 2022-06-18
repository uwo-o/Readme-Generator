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
        let index = languages_tags.indexOf($(this).parent().text());
        languages_tags.splice(index, 1);
    }
    else if($(this).parent().hasClass('frameworks')) {
        let index = frameworks_tags.indexOf($(this).parent().text());
        frameworks_tags.splice(index, 1);
    }
    else if($(this).parent().hasClass('keywords')) {
        let index = keywords_tags.indexOf($(this).parent().text());
        keywords_tags.splice(index, 1);
    }
});