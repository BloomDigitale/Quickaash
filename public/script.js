`use strict`;

// setting the year in the footer
const year = document.querySelector('.curr_year');

year.innerHTML = new Date().getFullYear();


// mobile navbar toggle
const openNav = document.querySelector('.open_nav');
const closeNav = document.querySelector('.close_nav');
const navbar = document.querySelector('.mobile_nav');

openNav.addEventListener('click', (e) => {
    e.preventDefault();

    openNav.classList.add('hidden');

    closeNav.classList.remove('hidden');
    closeNav.classList.add('block');

    navbar.classList.remove('hidden');
    navbar.classList.add('flex');
});

closeNav.addEventListener('click', (e) => {
    e.preventDefault();

    closeNav.classList.add('hidden');
    closeNav.classList.remove('block');

    openNav.classList.remove('hidden');
    openNav.classList.add('block');

    navbar.classList.add('hidden');
    navbar.classList.remove('flex');
});


// Form Sections
const heading = document.querySelector('.heading');
const page1 = document.querySelector('.step_1');
const page2 = document.querySelector('.step_2');
const page3 = document.querySelector('.step_3');
const page4 = document.querySelector('.step_4');
const page5 = document.querySelector('.step_5');



//Form Navigation variables
const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector('.nav2');
const nav3 = document.querySelector('.nav3');
const nav4 = document.querySelector('.nav4');
const nav5 = document.querySelector('.nav5');

// Desktop hero background variables
const hero1 = document.querySelector('.hero_1');
const hero2 = document.querySelector('.hero_2');
const hero3 = document.querySelector('.hero_3');
const hero4 = document.querySelector('.hero_4');
const hero5 = document.querySelector('.hero_5');



const next_page2 = document.querySelector('.next_page_2');
const next_page3 = document.querySelector('.next_page_3');
const next_page4 = document.querySelector('.next_page_4');
const next_page5 = document.querySelector('.next_page_5');

const back_page1 = document.querySelector('.back_page_1');
const back_page2 = document.querySelector('.back_page_2');
const back_page3 = document.querySelector('.back_page_3');
const back_page4 = document.querySelector('.back_page_4');

const validator = document.querySelector('.terms_validator');
const submitForm = document.querySelector('.submit');


// Form variables
const form = document.querySelector('#form');

const firstNameInput = document.querySelector('.first_name');
const lastNameInput = document.querySelector('.last_name');
const emailInput = document.querySelector('.email');
const contactInput = document.querySelector('.phone_number');

const bvnInput = document.querySelector('.bvn');
const dobInput = document.querySelector('.dob');
const personAddInput = document.querySelector('.personal_address');
const maritalStatsInput = document.querySelector('.marital_status');
const nokInput = document.querySelector('.next_of_kin');
const nokNumInput = document.querySelector('.nok_number');

const personalInfo = [];

const eligibilityInput = document.querySelector('.eligibility');
const amountInput = document.querySelector('.loan_amount');
const durationInput = document.querySelector('.loan_duration');
const purposeInput = document.querySelector('.purpose');

const guarantorInput = document.querySelector('.guarantor');
const guarantorNumInput = document.querySelector('.guarantor_number');
const occupationInput = document.querySelector('.occupation');

const loanDetails = [];

const phoneManInput = document.querySelector('.phone_manufacturer');
const phoneImeiInput = document.querySelector('.phone_imei');
const phoneModelInput = document.querySelector('.phone_model');
const phoneConInput = document.querySelector('.phone_condition');

const collateralDetails = [];

const businessNameInput = document.querySelector('.business_name');
const businessAddInput = document.querySelector('.business_address');
const businessGuarantorInput = document.querySelector('.business_guarantor');
const businessNumInput = document.querySelector('.business_contact');

const businessDetails = [];

const bankNameInput = document.querySelector('.bank');
const accNameInput = document.querySelector('.account_name');
const accNumInput = document.querySelector('.account_num');
const verifyAccInput = document.querySelector('.verify_account');

const accDetails = [];



// Image upload variables
const selfieUpload = document.querySelector('.selfie_upload');
const idUpload = document.querySelector('.id_upload');
const receiptUpload = document.querySelector('.receipt_upload');

const body = document.querySelector('body');
const backbtns = document.querySelectorAll('.back');
const nextbtns = document.querySelectorAll('.next');

// making sure the form goes back to the top whenever the nextbutton is clicked
body.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('back')) {
        console.log('go back to top');
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    }

    if(e.target.classList.contains('next')) {
        console.log('go back to top');
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    }
})

// each form section input tags variables
const personalInfoInput = document.querySelectorAll('#personal_input');
const loanDetailsInput = document.querySelectorAll('#loan_input');
const collateralDetailsInput = document.querySelectorAll('#collateral_input');
const businessDetailsInput = document.querySelectorAll('#business_input');
const accDetailsInput = document.querySelectorAll('#acc_input');

const personalInfoError = document.querySelectorAll('.personal_info_error');
const loanError = document.querySelectorAll('.loan_error');
const collateralError = document.querySelectorAll('.collateral_error');
const businessError = document.querySelectorAll('.business_error');
const accError = document.querySelectorAll('.acc_error');
 



// Handling email error
const emailError = document.querySelector(`.email_error`);

emailInput.addEventListener(`input`, validateEmail);

    function validateEmail() {
        const email = emailInput.value.trim();

        if(email === "") {
            showError(`Can't be empty`);
            return;
        }
    
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailPattern.test(email)) {
            showError(`Please entera a valid email (e.g., name@example.com)`);
            return;
        }
    
        if(/[^\w.@-]/.test(email)) {
            showError(`Email contains invalid characters.`);
            return;
        }
    
        // checking for the position of '@' and '.' 
        const atIndex = email.indexOf(`@`);
        const dotIndex = email.lastIndexOf(`.`);
    
        if(atIndex === -1 || atIndex > dotIndex) {
            showError(`The domain in your email should be formatted correctly (e.g., example.com).`);
            return;
        }
    
        // check for at least 2 characters after the last dot(domain extension)
        const domainExtension = email.substring(dotIndex + 1);
    
        if (domainExtension.length < 2) {
          showError(`The domain extension should be at least 2 characters (e.g., .com, .org).`);
          return;
        }
    
        // Check for length limits
        if (email.length > 254) {
          showError(`Email is too long. Maximum length is 254 characters.`);
          return;
        }
    
            emailInput.classList.add(`border-[#C9C9C9]`);
            emailInput.classList.remove(`border-red-500`);
    
            emailError.textContent = ``;
            emailError.classList.add(`opacity-0`); 
    };


    function showError(message) {
        emailInput.classList.remove(`border-[#C9C9C9]`);
        emailInput.classList.add(`border-red-500`);

        emailError.textContent = message;
        emailError.classList.remove(`opacity-0`);
    };

// changing file upload look on image selection
const fileFields = document.querySelectorAll(`.file_field`);

fileFields.forEach((fileField, index) => {
 const file = fileField.querySelector(`.file_input`);

//adding a change event to check if a file has been selected
 file.addEventListener(`change`, (e) => {

    if (e.target === file) {

        const cloudIcon = fileField.querySelector(`.cloud_icon`);
        const fileFormat = fileField.querySelector(`.file_format`);

        if(file.files.length > 0) {
    
            // Removing the cloud icon and upload text
            if(cloudIcon) cloudIcon.remove();
            if(fileFormat) fileFormat.remove();

            // Change border color
            fileField.classList.remove('border-red-500');
            fileField.classList.add('border-[#C9C9C9]');
    
            // Adding a new Icon
            const successIcon = document.createElement(`ion-icon`);
            successIcon.setAttribute(`name`, `document-attach-outline`); 
            successIcon.classList.add(`text-[#004D3F]`, `text-[10px]`, `text-[18px]`);
            fileField.appendChild(successIcon);
        }
    } 
    
 })


});


// making sure some input tags receive only number values
const numberInputs = document.querySelectorAll(`.number_input`);

numberInputs.forEach(input => {
    input.addEventListener(`input`, (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });
});


// checking for input changes function
const personalInfoInputChange = (e) => {
    if(e.target.value !== "") {
        personalInfo.push(`${e.target.name} : ${e.target.value}`);

    } else{
        console.log(`Input empty: ${e.target.name}`);
    }
};

const loanInputChange = (e) => {
    if(e.target.value !== "") {
        loanDetails.push(`${e.target.name} : ${e.target.value}`); 
    } else{
        console.log(`Input empty: ${e.target.name}`);
    }
};

const collateralInputChange = (e) => {
    if(e.target.value !== "") {
        collateralDetails.push(`${e.target.name} : ${e.target.value}`); 
    } else{
        console.log(`Input empty: ${e.target.name}`);
    }
};

const businessInputChange = (e) => {
    if(e.target.value !== "") {
        businessDetails.push(`${e.target.name} : ${e.target.value}`);
    } else{
        console.log(`Input empty: ${e.target.name}`);
    }
};

const accInputChange = (e) => {
    if(e.target.value !== "") {      
        accDetails.push(`${e.target.name} : ${e.target.value}`);
    } else{
        console.log(`Input empty: ${e.target.name}`);
    }
};


// file upload errors
const fileError = document.querySelectorAll('.file_input_error');
const fileContainer = document.querySelectorAll(`.file_container`);
const collateralFileError = document.querySelector('.collateral_file_error');


personalInfoInput.forEach((input, index) => {
    input.addEventListener('blur', personalInfoInputChange);

    input.addEventListener('click', () => {

        if(input.classList.contains('border-red-500')) {
            input.addEventListener('blur', (e) => {
                e.preventDefault();
                if(input.value.trim() !== "") {
                    input.classList.remove('border-red-500');
                    input.classList.add('border-[#C9C9C9]');
                    personalInfoError[index].classList.add('opacity-0');
                }
            })
        }

    });
});

loanDetailsInput.forEach((input, index) => {
    input.addEventListener('blur', loanInputChange);

    input.addEventListener('click', () => {

        if(input.classList.contains('border-red-500')) {
            input.addEventListener('blur', (e) => {
                e.preventDefault();
                if(input.value.trim() !== "") {
                    input.classList.remove('border-red-500');
                    input.classList.add('border-[#C9C9C9]');
                    loanError[index].classList.add('opacity-0');
                }
            })
        }

    });
});

collateralDetailsInput.forEach((input, index) => {
    input.addEventListener('blur', collateralInputChange);

    input.addEventListener('click', () => {

        if(input.classList.contains('border-red-500')) {
            input.addEventListener('blur', (e) => {
                e.preventDefault();
                if(input.value.trim() !== "") {
                    input.classList.remove('border-red-500');
                    input.classList.add('border-[#C9C9C9]');
                    collateralError[index].classList.add('opacity-0');

                    collateralFileError.classList.add('border-[#C9C9C9]');
                    collateralFileError.classList.remove('border-red-500');
                }
            })
        }

    });
});

businessDetailsInput.forEach((input, index) => {
    input.addEventListener('blur', businessInputChange);

    input.addEventListener('click', () => {

        if(input.classList.contains('border-red-500')) {
            input.addEventListener('blur', (e) => {
                e.preventDefault();
                if(input.value.trim() !== "") {
                    input.classList.remove('border-red-500');
                    input.classList.add('border-[#C9C9C9]');
                    businessError[index].classList.add('opacity-0');
                }
            })
        }

    });
});

accDetailsInput.forEach((input, index) => {
    input.addEventListener('blur', accInputChange);

    input.addEventListener('click', () => {

        if(input.classList.contains('border-red-500')) {
            input.addEventListener('blur', (e) => {
                e.preventDefault();
                if(input.value.trim() !== "") {
                    input.classList.remove('border-red-500');
                    input.classList.add('border-[#C9C9C9]');
                    accError[index].classList.add('opacity-0');
                }
            })
        }

    });
});


next_page2.addEventListener('click', (e) => {
    e.preventDefault();

    if(personalInfo.length >= 12) {
        page1.classList.remove('flex');
        page1.classList.add('hidden');
        nav1.classList.remove('flex');
        nav1.classList.add('hidden');
        hero1.classList.remove('md:flex');
        hero1.classList.add('md:hidden');
        heading.classList.add('hidden');
        heading.classList.remove('flex');

        page2.classList.remove('hidden');
        page2.classList.add('flex');
        nav2.classList.remove('hidden');
        nav2.classList.add('flex');
        hero2.classList.remove('md:hidden');
        hero2.classList.add('md:flex');
    }else if(personalInfo.length === 0) {
        personalInfoError.forEach( (error) => {
            error.classList.remove('opacity-0');
            error.innerHTML = `Can't be empty`;

            document.querySelector('.form_container').classList.remove('gap-[1.5rem]');
            document.querySelector('.form_container').classList.add('gap-[0.5rem]');

            personalInfoInput.forEach(input => {
                input.classList.remove('border-[#C9C9C9]');
                input.classList.add('border-red-500');
            });

            fileError.forEach(error =>{
                error.classList.remove('border-[#C9C9C9]');
                error.classList.add('border-red-500');
            })
        });
    };
    
});

next_page3.addEventListener('click', (e) => {
    e.preventDefault();

    if(loanDetails.length >= 8 ) {
        page2.classList.remove('flex');
        page2.classList.add('hidden');
        nav2.classList.remove('flex');
        nav2.classList.add('hidden');
        hero2.classList.remove('md:flex');
        hero2.classList.add('md:hidden');
        
        
        page3.classList.remove('hidden');
        page3.classList.add('flex');
        nav3.classList.remove('hidden');
        nav3.classList.add('flex');
        hero3.classList.remove('md:hidden');
        hero3.classList.add('md:flex');
    } else if(loanDetails.length === 0) {
        loanError.forEach( (error) => {
            error.classList.remove('opacity-0');
            error.innerHTML = `Can't be empty`;

            loanDetailsInput.forEach(input => {
                input.classList.remove('border-[#C9C9C9]');
                input.classList.add('border-red-500');
            });
          
        });
    };

});

next_page4.addEventListener('click', (e) => {
    e.preventDefault();

    if(collateralDetails.length >= 3) {
        page3.classList.remove('flex');
        page3.classList.add('hidden');
        nav3.classList.remove('flex');
        nav3.classList.add('hidden');
        hero3.classList.remove('md:flex');
        hero3.classList.add('md:hidden');
        
        
        page4.classList.remove('hidden');
        page4.classList.add('flex');
        nav4.classList.remove('hidden');
        nav4.classList.add('flex');
        hero4.classList.remove('md:hidden');
        hero4.classList.add('md:flex');
    } else if(collateralDetails.length === 0) {
        collateralError.forEach( (error) => {
            error.classList.remove('opacity-0');
            error.innerHTML = `Can't be empty`;

            collateralDetailsInput.forEach(input => {
                input.classList.remove('border-[#C9C9C9]');
                input.classList.add('border-red-500');
            });

            collateralFileError.classList.remove('border-[#CFD8DC]');
            collateralFileError.classList.add('border-red-500');
          
        });
    };

});

next_page5.addEventListener('click', (e) => {
    e.preventDefault();

    if(businessDetails.length >= 5) {
        page4.classList.remove('flex');
        page4.classList.add('hidden');
        nav4.classList.remove('flex');
        nav4.classList.add('hidden');
        hero4.classList.remove('md:flex');
        hero4.classList.add('md:hidden');
        
        page5.classList.remove('hidden');
        page5.classList.add('flex');
        nav5.classList.remove('hidden');
        nav5.classList.add('flex');
        hero5.classList.remove('md:hidden');
        hero5.classList.add('md:flex');
    } else if(businessDetails.length === 0) {
        businessError.forEach( (error) => {
            error.classList.remove('opacity-0');
            error.innerHTML = `Can't be empty`;

            businessDetailsInput.forEach(input => {
                input.classList.remove('border-[#C9C9C9]');
                input.classList.add('border-red-500');
            });
        });
    };
});

// submitForm.addEventListener('click', (e) => {
//         e.preventDefault();
//     if(accDetails.length === 0) {
//         accError.forEach( (error) => {
//             error.classList.remove('opacity-0');
//             error.innerHTML = `Can't be empty`;

//             accDetailsInput.forEach(input => {
//                 input.classList.remove('border-[#C9C9C9]');
//                 input.classList.add('border-red-500');
//             });

//         });

//     };
// });


back_page1.addEventListener('click', (e) => {
    e.preventDefault();
    
    page2.classList.remove('flex');
    page2.classList.add('hidden');
    nav2.classList.remove('flex');
    nav2.classList.add('hidden');
    hero2.classList.remove('md:flex');
    hero2.classList.add('md:hidden');
    heading.classList.add('flex');
    heading.classList.remove('hidden');

    page1.classList.remove('hidden');
    page1.classList.add('flex');
    nav1.classList.remove('hidden');
    nav1.classList.add('flex');
    hero1.classList.remove('md:hidden');
    hero1.classList.add('md:flex');
});

back_page2.addEventListener('click', (e) => {
    e.preventDefault();

    page3.classList.remove('flex');
    page3.classList.add('hidden');
    nav3.classList.remove('flex');
    nav3.classList.add('hidden');
    hero3.classList.remove('md:flex');
    hero3.classList.add('md:hidden');

    page2.classList.remove('hidden');
    page2.classList.add('flex');
    nav2.classList.remove('hidden');
    nav2.classList.add('flex');
    hero2.classList.remove('md:hidden');
    hero2.classList.add('md:flex');

});

back_page3.addEventListener('click', (e) => {
    e.preventDefault();

    page4.classList.remove('flex');
    page4.classList.add('hidden');
    nav4.classList.remove('flex');
    nav4.classList.add('hidden');
    hero4.classList.remove('md:flex');
    hero4.classList.add('md:hidden');

    page3.classList.remove('hidden');
    page3.classList.add('flex');
    nav3.classList.remove('hidden');
    nav3.classList.add('flex');
    hero3.classList.remove('md:hidden');
    hero3.classList.add('md:flex');

});

back_page4.addEventListener('click', (e) => {
    e.preventDefault();

    page5.classList.remove('flex');
    page5.classList.add('hidden');
    nav5.classList.remove('flex');
    nav5.classList.add('hidden');
    hero5.classList.remove('md:flex');
    hero5.classList.add('md:hidden');

    page4.classList.remove('hidden');
    page4.classList.add('flex');
    nav4.classList.remove('hidden');
    nav4.classList.add('flex');
    hero4.classList.remove('md:hidden');
    hero4.classList.add('md:flex');

});





//submitting the main form data
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    //Initializing the data object witth basic form data
   const data = {
    first_name : firstNameInput.value,
    last_name : lastNameInput.value,
    email : emailInput.value,
    phone_number : contactInput.value,
    bvn : bvnInput.value,
    date_of_birth : dobInput.value,
    personal_address : personAddInput.value,
    marital_status : maritalStatsInput.value,
    next_of_kin : nokInput.value,
    next_of_kin_phone_number : nokNumInput.value,
    selfie_picture : selfieUpload.files[0],
    id_document : idUpload.files[0],

    first_time_applicant : eligibilityInput.value,
    requested_amount : Number(`${amountInput.value.replace(',' , '').trim()}`),
    loan_circle : durationInput.value,
    purpose_of_loan : purposeInput.value,

    guarantor_name : guarantorInput.value,
    guarantor_phone_number : guarantorNumInput.value,
    occupation : occupationInput.value,

    phone_manufacturer : phoneManInput.value,
    phone_imei : phoneImeiInput.value,
    phone_model : phoneModelInput.value,
    phone_condition : phoneConInput.value,
    collateral_receipt : receiptUpload.files[0],

    company_name : businessNameInput.value,
    company_address : businessAddInput.value,
    company_guarantor_name : businessGuarantorInput.value,
    company_guarantor_phone : businessNumInput.value,

    bank_name : bankNameInput.value,
    account_name : accNameInput.value,
    account_number : accNumInput.value,
   };

    //converting data to FormData
   const formData = new FormData();
   Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
   });


    try {
         const response = await fetch("https://quickaash-backend.onrender.com/api/loan-application/", {
            method: "POST",
            body: formData,
         });

         if(response.ok) {

            console.log(`form submitted successfully`);
            form.reset();
            window.location.href = "application_form.html";

            // include a load screen when submitting

         } else {
            console.log(await response.json());
            console.log(`form submission unsuccessful`);
         }
    } catch (e) {
        console.error(e);
    }

});




