var typed = new Typed('.typed-web', {
    strings: ["b"],
    typeSpeed: 100,
    startDelay: 1000,
    showCursor: false,
});

var typed2 = new Typed('.typed-readme', {
    strings: ["eadme"],
    typeSpeed: 100,
    startDelay: 1500,
    showCursor: false,
});

var typed3 = new Typed('.typed-generator', {
    strings: ["erator"],
    typeSpeed: 100,
    startDelay: 2000,
    showCursor: false,
});

let create_md = $('#create-md');
create_md.click(function (e) {

    let contributors = [];
    let installation = [];
    let usage = [];

    e.preventDefault();
    let title = $('#project-title').val();
    let description = $('#project-description').val();
    let author = $('#project-author').val();
    let author_url = $('#project-author-github').val();
    let license = $('#project-license').val();
    let license_url = $('#project-license-url').val();
    let version = $('#project-version').val();
    let repository = $('#repository-name').val();
    let repository_url = $('#repository-url').val();

    for(let i=1; i<counter_contributors; i++){

        let social_media = [];

        let contributor = $('#contributor-'+i).val();
        if($('#github-input-'+i).val()){
            social_media.push({
                "name": "Github",
                "url": $('#github-input-'+i).val()
            });
        }
        if($('#linkedin-input-'+i).val()){
            social_media.push({
                "name": "Linkedin",
                "url": $('#linkedin-input-'+i).val()
            });
        }
        if($('#website-input-'+i).val()){
            social_media.push({
                "name": "Website",
                "url": $('#website-input-'+i).val()
            });
        }

        contributors.push({
            name: contributor,
            social_media: social_media
        });
    }

    for(let i=1; i<counter_installation_step; i++){
        let installation_step = $('#step'+i+'-title').val();
        let installation_step_description = $(`#step${i}-description`).val();

        let command_step = [];

        for(let j=0; j<counter_installation_command[i]; j++){
            let installation_command = "";
            if($('#step'+i+'-command'+j).val()){
                installation_command = $('#step'+i+'-command'+j).val();
            }
            command_step.push(installation_command);
        }

        installation.push({
            step: (i).toString(),
            title: installation_step,
            description: installation_step_description,
            commands: command_step
        });
    }

    for(let i=1; i<counter_usage_step; i++){
        let usage_step = $('#usage'+i+'-title').val();
        let usage_step_description = $(`#usage${i}-description`).val();

        let command_step = [];
        let input_step = [];

        for(let j=0; j<counter_usage_command[i]; j++){
            let usage_command = "";
            if($('#usage'+i+1+'-command'+j).val()){
                usage_command = $('#usage'+i+'-command'+j).val();
            }
            command_step.push(usage_command);
        }

        for(let j=0; j<counter_usage_input[i]; j++){

            let usage_input = "";
            let usage_input_url = "";
            let usage_input_description = "";

            if( $('#usage'+i+'-input'+j).val()){
                usage_input = $('#usage'+i+'-input'+j).val();
            }
            if($('#usage'+i+'-input-url'+j).val()){
                usage_input_url = $('#usage'+i+'-input-url'+j).val();
            }
            if($(`#usage${i}-input-description${j+1}`).val()){
                usage_input_description = $(`#usage${i}-input-description${j+1}`).val();
            }
            input_step.push({
                name: usage_input,
                url: usage_input_url,
                description: usage_input_description
            });
        }

        usage.push({
            step: (i).toString(),
            title: usage_step,
            description: usage_step_description,
            commands: command_step,
            input: input_step
        });
    }
    let languages_list=languages_tags;
    let technologies_list=frameworks_tags;
    let keywords_list=keywords_tags;

    let input_json = {
        "title": title,
        "url": "",
        "description": description,
        "author": author,
        "author_url": author_url,
        "license": license,
        "license_url": license_url,
        "version": version,
        "repository": repository,
        "repository_url": repository_url,
        "contributors": contributors,
        "installation": installation,
        "usage": usage,
        "languages": languages_list,
        "technologies": technologies_list,
        "keywords": keywords_list
    };
    const API_URL = 'https://api-readme-generator.herokuapp.com/create_md';

    axios.post(API_URL, input_json)

        .then(function (response) {
            $('#result').empty();
            let html=`
                <div class="container">\
                <div class="row">\
                    <hr>\
                    <h2>Generated file:</h2>\
                </div>\
                <div class="row">\
                    <textarea name="output" id="output">`+response.data+`</textarea>\
                </div>\
            </div>\
            `;
            $('#result').append(html);
            $('html,body').animate({
                scrollTop: $('#result').offset().top
            }, 300);
        })
        .catch(function (error) {
            console.log(error);
        }
    );
});