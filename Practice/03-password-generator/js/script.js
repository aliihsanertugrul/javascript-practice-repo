const lblPassword = document.getElementById("lblPassword");
const btnCopy = document.getElementById("btnCopy");
const lblCharLength = document.getElementById("lblCharLength");
const rangeCharLength = document.getElementById("rangeCharLength");
const chkUppercase = document.getElementById("chkUppercase");
const chkLowercase = document.getElementById("chkLowercase");
const chkNumbers = document.getElementById("chkNumbers");
const chkSymbols = document.getElementById("chkSymbols");
const lblStrength = document.getElementById("lblStrength");
const btnGenerate = document.getElementById("btnGenerate");

btnCopy.addEventListener("click", async () => {
  const text = lblPassword.innerText;
  copyTextToClipboard(text);
});

rangeCharLength.addEventListener("change", (e) => {
  lblCharLength.innerHTML = e.target.value;
});

btnGenerate.addEventListener("click", () => {
  // Gerekli inputları al
  const passwordLength = rangeCharLength.value;
  const hasUppercase = chkUppercase.checked;
  const hasLowercase = chkLowercase.checked;
  const hasNumbers = chkNumbers.checked;
  const hasSymbols = chkSymbols.checked;

  // Validation yap
  if (passwordLength <= 0) {
    alert("Character length must be greater than 0");
    return;
  }

  if (!hasUppercase && !hasLowercase && !hasNumbers && !hasSymbols) {
    alert("Password must include at least a letter, number or symbol");
    return;
  }

  // Şifreyi oluştur
  const password = generatePassword(
    passwordLength,
    hasUppercase,
    hasLowercase,
    hasNumbers,
    hasSymbols
  );
  lblPassword.innerText = password;

  // strength i belirle
  const strengthText = getStrengthText(
    passwordLength,
    hasUppercase,
    hasLowercase,
    hasNumbers,
    hasSymbols
  );
  lblStrength.innerHTML = strengthText; 
});

const generatePassword = (
  passwordLength,
  hasUppercase,
  hasLowercase,
  hasNumbers,
  hasSymbols
) => {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%&*()_-+=[]{};:,.<>?";
  let password = "";
  let allChars = "";

  if (hasUppercase) {
    password += getRandomChar(uppercaseLetters);
    allChars += uppercaseLetters;
  }

  if (hasLowercase) {
    password += getRandomChar(lowercaseLetters);
    allChars += lowercaseLetters;
  }

  if (hasNumbers) {
    password += getRandomChar(numbers);
    allChars += numbers;
  }

  if (hasSymbols) {
    password += getRandomChar(symbols);
    allChars += symbols;
  }

  for(let i=password.length; i<passwordLength; i++){
    password += getRandomChar(allChars);
  }

  password = password.split('').sort( (a,b) => Math.random() - 0.5 ).join('');

  return password;
};

const getRandomChar = (chars) => {
  // Math.floor(Math.random() * (max-min+1) + min)
  // 0 - 100 arasında sayı tutumak için
  // Math.floor(Math.random() * 101)
  const randmIndex = Math.floor(Math.random() * chars.length);
  return chars.charAt(randmIndex);
};

const getStrengthText = (passwordLength,
  hasUppercase,
  hasLowercase,
  hasNumbers,
  hasSymbols) => { 
    
    const strengthPoint = (Number(hasUppercase) + Number(hasLowercase) + Number(hasNumbers) + Number(hasSymbols))*passwordLength;

    let strengthText = "";
    let activeClass = "";

    for(let i=0; i< Math.ceil(strengthPoint/10); i++){
      strengthText += "&#9929";
    }

    if(strengthPoint>50){
      activeClass="powerful"
    }
    else if(strengthPoint>30){
      activeClass="normal"
    }
    else{
      activeClass="weak"
    }


    return `<span class="${activeClass}">${strengthText}</span>`;

}

const copyTextToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.log(error);
  }
};
