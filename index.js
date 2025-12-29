let symbols = ['1', '2', '3', '4', '5', '6', '7', '8',
    '9', '0', '!', '@', '#', '$', '%', '^', '&', '*'
    , '~', '?', ',', ':', ';', '|']

let passwordOne = document.getElementById('infoOne');
let passwordTwo = document.getElementById('infoTwo');

function generatePassword() {
    let password = '';
    for (let i = 0; i < 10; i++) {
        let count = Math.floor(Math.random() * symbols.length);
        password += symbols[count];
    }
    return password;
}

function passwordFirst() {
    passwordOne.textContent = generatePassword();
    passwordOne.classList.add('displayBlock');
}

function passwordSecond() {
    passwordTwo.textContent = generatePassword();
    passwordTwo.classList.add('displayBlock');
}

function copyText(element) {
    const text = element.textContent;

    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
        element.innerText = "Copied! ✅";

        setTimeout(() => {
            element.innerText = text;
        }, 1000);
    });
}