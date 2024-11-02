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

const firstNameInput = document.querySelector('.first_name');
const lastNameInput = document.querySelector('.last_name');
const emailInput = document.querySelector('.email');
const contactInput = document.querySelector('.phone_number');

const bvnInput = document.querySelector('.bvn');
const dobInput = document.querySelector('.dob');
const personAddInput = document.querySelector('.personal_address');
const nokInput = document.querySelector('.next_of_kin');
const nokNumInput = document.querySelector('.nok_number');

const eligibilityInput = document.querySelector('.eligibility');
const amountInput = document.querySelector('.loan_amount');
const durationInput = document.querySelector('.loan_duration');
const purposeInput = document.querySelector('.purpose');


const guarantorInput = document.querySelector('.guarantor');
const guarantorNumInput = document.querySelector('.guarantor_number');
const occupationInput = document.querySelector('.occupation');

const businessNameInput = document.querySelector('.business_name');
const businessAddInput = document.querySelector('.business_address');
const businessGuarantorInput = document.querySelector('.business_guarantor');
const businessNumInput = document.querySelector('.business_contact');

const bankNameInput = document.querySelector('.bank');
const accNameInput = document.querySelector('.account_name');
const accNumInput = document.querySelector('.account_num');
const verifyAccInput = document.querySelector('.verify_account');

const phoneManInput = document.querySelector('.phone_manufacturer');
const phoneImeiInput = document.querySelector('.phone_imei');
const phoneModelInput = document.querySelector('.phone_model');
const phoneConInput = document.querySelector('.phone_condition');
const maritalStatsInput = document.querySelector('.marital_status');



// Image upload variables
const selfieUpload = document.querySelector('.selfie_upload');
const idUpload = document.querySelector('.id_upload');
const receiptUpload = document.querySelector('.receipt_upload');


next_page2.addEventListener('click', (e) => {
    e.preventDefault();

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
});

next_page3.addEventListener('click', (e) => {
    e.preventDefault();

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
});

next_page4.addEventListener('click', (e) => {
    e.preventDefault();

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
});

next_page5.addEventListener('click', (e) => {
    e.preventDefault();

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

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
            first_name: firstNameInput.value,
            last_name: lastNameInput.value,
            email: emailInput.value,
            contact: contactInput.value,
            BVN: bvnInput.value,
            D_O_B: dobInput.value,
            address: personAddInput.value,
            next_of_kin: nokInput.value,
            next_of_kin_contact: nokNumInput.value,
            eligibility: eligibilityInput.value,
            loan_amount: amountInput.value,
            loan_duration: durationInput.value,
            loan_purpose: purposeInput.value,
            guarantor: guarantorInput.value,
            guarantor_contact: guarantorNumInput.value,
            occupation: occupationInput.value,
            business_name: businessNameInput.value,
            business_address: businessAddInput.value,
            business_guarantor: businessGuarantorInput.value,
            business_contact: businessNumInput.value,
            bank_name: bankNameInput.value,
            account_name: accNameInput.value,
            account_number: accNumInput.value,
            account_number_verification: verifyAccInput.value,
            phone_condition: phoneConInput.value,
            phone_model: phoneModelInput.value,
            phone_manufacturer: phoneManInput.value,
            phone_imei: phoneImeiInput.value,
            marital_status: maritalStatsInput.value,
    };

    const resetValues = formData.values();

    const inputData = {
        from_name: formData.first_name,
        message: formData.entries(),
    };

    console.log(formData.entries());

    emailjs.send(serviceID, templateID, inputData)
    .then(() => {
            resetValues.forEach( (value) => value = '');
            console.log('successful');
        }, (error) => {
                console.log(error);
            }
        );
});

