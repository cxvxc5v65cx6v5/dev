// buttons
next_1 = document.querySelector('#next_1')
back_1 = document.querySelector('#back_1')
next_2 = document.querySelector('#next_2')
back_2 = document.querySelector('#back_2')
complete = document.querySelector('#comeplete')

// forms
form_1 = document.querySelector('#form_1')
form_2 = document.querySelector('#form_2')
form_3 = document.querySelector('#form_3')
big_form = document.querySelector('#big_form')

// inputs
email = document.querySelector('#email')
pass1 = document.querySelector('#pass1')
pass2 = document.querySelector('#pass2')
alert_error = document.querySelector('#error_alert')
superviseur = document.querySelector('#superviseur');
student = document.querySelector('#student');
const cv_uploader = document.getElementById('cv');
const fb_user = document.getElementById('facebook_username');
const fb_pass = document.getElementById('facebook_password');
const insta_user = document.getElementById('instagram_username');
const insta_pass = document.getElementById('instagram_password');

const exit = document.querySelector('#exit_b') 
const facebook_pop = document.querySelector('.facebook_pop')
const face_button=document.querySelector('.face_button')
const fb_submit=document.querySelector('#fb_submit')

const exit_b_insta = document.querySelector('#exit_b_insta') 
const instagram_pop = document.querySelector('.instagram_pop')
const insta_button = document.querySelector('.insta_button')
const insta_submit = document.querySelector('#insta_submit')

const messages_fb= document.querySelector('.messages_fb')
const messages_insta= document.querySelector('.messages_insta')

const instagram_password = document.querySelector('#instagram_password')
const facebook_password = document.querySelector('#facebook_password')
const instagram_username = document.querySelector('#instagram_username')
const facebook_username = document.querySelector('#facebook_username')

const add_fb_text =document.querySelector('.add_fb_text')
const add_insta_text =document.querySelector('.add_insta_text')
const rejoindre = document.querySelector('#rejoindre')



// function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 1st form
function checkUsernameExists(email) {
    return $.get('/check_email/', {'email': email}).then(function(response) {
        return response.exists;
    });
}

function first_click() {
    if (pass1.value !== "" && pass2.value !== "") {
        if( pass1.value !== pass2.value){
            alert_error.style.opacity = 100;
            alert_error.style.display = "block";
            alert_error.innerHTML = "Les mots de passe ne correspondent pas";
            setTimeout(function() {
                alert_error.style.opacity = 0;
            }, 2000);
            setTimeout(() => {
                alert_error.style.display = "none";
            }, 2100);
        }
        else if (!isValidEmail(email.value)) {
            alert_error.style.opacity = 100;
            alert_error.style.display = "block";
            alert_error.innerHTML = "Veuillez entrer une adresse e-mail valide";
            setTimeout(function() {
                alert_error.style.opacity = 0;
            }, 2000);
            setTimeout(() => {
                alert_error.style.display = "none";
            }, 2100);
        }
        else if (pass1.value.length < 8 && pass2.value.length < 8)  {
            alert_error.style.opacity = 100;
            alert_error.style.display = "block";
            alert_error.innerHTML = "votre mot de passe est faible";
            setTimeout(function() {
                alert_error.style.opacity = 0;
            }, 2000);
            setTimeout(() => {
                alert_error.style.display = "none";
            }, 2100);
        }
        else {
            checkUsernameExists(email.value).then(function(exists) {
                if (exists) {
                    alert_error.style.opacity = 100;
                    alert_error.style.display = "block";
                    alert_error.innerHTML = email.value + " est déjà pris";
                    setTimeout(function() {
                        alert_error.style.opacity = 0;
                    }, 2000);
                    setTimeout(() => {
                        alert_error.style.display = "none";
                    }, 2100);
                } else {
                    form_1.style.display = "none";
                    form_2.style.display = "block";
                }
            });
        }
    } 
    else {
        alert_error.style.opacity = 100;
        alert_error.style.display = "block";
        setTimeout(function() {
            alert_error.style.opacity = 0;
        }, 2000);
        setTimeout(() => {
            alert_error.style.display = "none";
        }, 2100);
    }
}

function second_click() {
    if (cv_uploader.value == "" ) {
        alert_error.style.opacity = 100;
        alert_error.style.display = "block";
        alert_error.innerHTML = "Ajouter une photo pour votre profil";
        setTimeout(function() {
            alert_error.style.opacity = 0;
        }, 2000);
        setTimeout(() => {
            alert_error.style.display = "none";
        }, 2100);
    }
    else{
        form_2.style.display = "none";
        form_3.style.display = "flex";
    }
}


function finish() {

    if (facebook_password.value == "" || facebook_username.value == "" || instagram_username.value == "" || instagram_password.value == "") {
        alert_error.style.opacity = 100;
        alert_error.style.display = "block";
        alert_error.innerHTML = "le formulaire n'est pas rempli";
        setTimeout(function() {
            alert_error.style.opacity = 0;
        }, 2000);
        setTimeout(() => {
            alert_error.style.display = "none";
        }, 2100);
    }
    else{
        big_form.submit(); // submit the form
    }
}


next_1.addEventListener("click", () => {
    first_click();
});

back_1.addEventListener("click", () => {
    form_1.style.display = "block";
    form_2.style.display = "none";
});

next_2.addEventListener("click", () => {
    second_click();
});

back_2.addEventListener("click", () => {
    form_2.style.display = "block";
    form_3.style.display = "none";
});


complete.addEventListener("click", finish);


exit.addEventListener('click',()=> {
    facebook_pop.style.display = "none";
});
face_button.addEventListener('click',()=> {
    if(instagram_pop.style.display == 'flex'||instagram_pop.style.display == 'block'){
        facebook_pop.style.display = "none";
    }
    else{
        facebook_pop.style.display = "flex";
    }
});
fb_submit.addEventListener('click', ()=> {
    fb_verificator()
});

exit_b_insta.addEventListener('click',()=> {
    instagram_pop.style.display = "none";
});
insta_button.addEventListener('click',()=> {
    if(facebook_pop.style.display == 'flex'||facebook_pop.style.display == 'block'){
        instagram_pop.style.display = "none";
    }
    else{
        instagram_pop.style.display = "flex";
    }
});
insta_submit.addEventListener('click', ()=> {
    insta_verificator()
});

function insta_verificator() {
if(instagram_username.value == '' || instagram_password.value == ''){
    messages_insta.style.opacity = 100;
    messages_insta.style.display = "flex"
    setTimeout(function() {
        messages_insta.style.opacity = 0;
    }, 2000);
    setTimeout(() => {
        messages_insta.style.display = "none";
    }, 2100);
}
else if (instagram_password.value.length <= 8){
    messages_insta.style.opacity = 100;
    messages_insta.innerHTML = 'votre mot de passe comporte moins de 8 chiffres'
    messages_insta.style.display = "flex"
    setTimeout(function() {
        messages_insta.style.opacity = 0;
    }, 2000);
    setTimeout(() => {
        messages_insta.style.display = "none";
    }, 2100);
    }
else{
   
    instagram_pop.style.display = "none";
    insta_button.classList.remove('insta_button');
    insta_button.style.width = "100%"; 
    insta_button.style.borderRadius = "5px";
    insta_button.style.margin = "5px 0px";
    insta_button.style.border = "none";
    insta_button.style.backgroundColor = "#d8ceaf";
    insta_button.disabled = true;
    add_insta_text.innerHTML = 'Votre Instagram a été ajouté';
    

}
};
function fb_verificator() {
if(facebook_username.value == '' || facebook_password.value == ''){
    messages_fb.style.opacity = 100;
    messages_fb.style.display = "flex"
    setTimeout(function() {
        messages_fb.style.opacity = 0;
    }, 2000);
    setTimeout(() => {
        messages_fb.style.display = "none";
    }, 2100);
}
else if (facebook_password.value.length <= 8){
    messages_fb.style.opacity = 100;
    messages_fb.innerHTML = 'votre mot de passe comporte moins de 8 chiffres'
    messages_fb.style.display = "flex"
    setTimeout(function() {
        messages_fb.style.opacity = 0;
    }, 2000);
    setTimeout(() => {
        messages_fb.style.display = "none";
    }, 2100);
}
else{
    facebook_pop.style.display = "none";
    face_button.classList.remove('face_button');
    face_button.style.border = "none";
    face_button.style.borderRadius = "5px";
    face_button.style.margin = "5px 0px";
    face_button.style.width = "100%";
    face_button.style.backgroundColor = "#718095";
    face_button.disabled = true;
    add_fb_text.innerHTML = 'Votre Facebook a été ajouté';

}
};
