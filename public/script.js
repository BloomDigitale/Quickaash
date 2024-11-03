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


const submitForm = document.querySelector('.submit');


// Form variables
const form = document.querySelector('form');

const firstNameInput = document.querySelector('.first_name').value;
const lastNameInput = document.querySelector('.last_name').value;
const emailInput = document.querySelector('.email').value;
const contactInput = document.querySelector('.phone_number').value;

const bvnInput = document.querySelector('.bvn').value;
const dobInput = document.querySelector('.dob').value;
const personAddInput = document.querySelector('.personal_address').value;
const maritalStatsInput = document.querySelector('.marital_status').value;
const nokInput = document.querySelector('.next_of_kin').value;
const nokNumInput = document.querySelector('.nok_number').value;

const personalInfo = [];

const eligibilityInput = document.querySelector('.eligibility').value;
const amountInput = document.querySelector('.loan_amount').value;
const durationInput = document.querySelector('.loan_duration').value;
const purposeInput = document.querySelector('.purpose').value;

const guarantorInput = document.querySelector('.guarantor').value;
const guarantorNumInput = document.querySelector('.guarantor_number').value;
const occupationInput = document.querySelector('.occupation').value;

const loanDetails = [];

const businessNameInput = document.querySelector('.business_name').value;
const businessAddInput = document.querySelector('.business_address').value;
const businessGuarantorInput = document.querySelector('.business_guarantor').value;
const businessNumInput = document.querySelector('.business_contact').value;

const businessDetails = [];

const bankNameInput = document.querySelector('.bank').value;
const accNameInput = document.querySelector('.account_name').value;
const accNumInput = document.querySelector('.account_num').value;
const verifyAccInput = document.querySelector('.verify_account').value;

const accDetails = [];

const phoneManInput = document.querySelector('.phone_manufacturer').value;
const phoneImeiInput = document.querySelector('.phone_imei').value;
const phoneModelInput = document.querySelector('.phone_model').value;
const phoneConInput = document.querySelector('.phone_condition').value;

const collateralDetails = [];


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

// checking for input changes function
const personalInfoInputChange = (e) => {
    if(e.target.value !== "") {
        personalInfo.push(`${e.target.name} : ${e.target.value}`);
        console.log(personalInfo.length);

    } else{
        console.log(`Input empty: ${e.target.name}`);
    }
};

const loanInputChange = (e) => {
    if(e.target.value !== "") {
        loanDetails.push(`${e.target.name} : ${e.target.value}`);
        console.log(loanDetails.length);  
    } else{
        console.log(`Input empty: ${e.target.name}`);
    }
};

const collateralInputChange = (e) => {
    if(e.target.value !== "") {
        collateralDetails.push(`${e.target.name} : ${e.target.value}`);
        console.log(collateralDetails.length);  
    } else{
        console.log(`Input empty: ${e.target.name}`);
    }
};

const businessInputChange = (e) => {
    if(e.target.value !== "") {
        businessDetails.push(`${e.target.name} : ${e.target.value}`);
        console.log(businessDetails.length); 
    } else{
        console.log(`Input empty: ${e.target.name}`);
    }
};

const accInputChange = (e) => {
    if(e.target.value !== "") {      
        accDetails.push(`${e.target.name} : ${e.target.value}`);
        console.log(accDetails,length);
    } else{
        console.log(`Input empty: ${e.target.name}`);
    }
};



personalInfoInput.forEach(input => {
    input.addEventListener('blur', personalInfoInputChange);
});

loanDetailsInput.forEach(input => {
    input.addEventListener('blur', loanInputChange);
});

collateralDetailsInput.forEach(input => {
    input.addEventListener('blur', collateralInputChange);
});

businessDetailsInput.forEach(input => {
    input.addEventListener('blur', businessInputChange);
});

accDetailsInput.forEach(input => {
    input.addEventListener('blur', accInputChange);
});


next_page2.addEventListener('click', (e) => {
    e.preventDefault();

    if(personalInfo.length > 9) {
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
    }
    
});

next_page3.addEventListener('click', (e) => {
    e.preventDefault();

    if(loanDetails.length === 8 ) {
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
    }

});

next_page4.addEventListener('click', (e) => {
    e.preventDefault();

    if(collateralDetails.length > 3) {
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
    }


});

next_page5.addEventListener('click', (e) => {
    e.preventDefault();

    if(businessDetails.length === 5) {
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
    }
});


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




//Form Action variables
const serviceID = 'service_8ku20jn';
const templateID = 'template_hiizfrd';
const publickey = 'K-c-JQucCIXu54R1_';

emailjs.init(publickey);


