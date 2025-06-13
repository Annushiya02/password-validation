let showPasswordBtn = document.querySelector('.show-password');
let passwordInp = document.querySelector('.password-input');
let passwordCheckList = document.querySelectorAll('.list-item');
let checklistContainer = document.querySelector('.password-checklist');

showPasswordBtn.addEventListener('click', () => {
    showPasswordBtn.classList.toggle('fa-eye');
    showPasswordBtn.classList.toggle('fa-eye-slash');
    passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password';
});

// Show/hide checklist on focus/blur
passwordInp.addEventListener('focus', () => {
    checklistContainer.classList.add('visible');
});
passwordInp.addEventListener('blur', () => {
    checklistContainer.classList.remove('visible');
});

// Validate password live
let validationRegex = [
    { regex: /.{8,}/ },
    { regex: /[0-9]/ },
    { regex: /[a-z]/ },
    { regex: /[A-Z]/ },
    { regex: /[^A-Za-z0-9]/ }
];

passwordInp.addEventListener('keyup', () => {
    validationRegex.forEach((item, i) => {
        if (item.regex.test(passwordInp.value)) {
            passwordCheckList[i].classList.add('checked');
        } else {
            passwordCheckList[i].classList.remove('checked');
        }
    });
});

