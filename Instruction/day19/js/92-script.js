

document.getElementById("formLogin").addEventListener("submit",(e)=>{

    e.preventDefault();

    const txtEmail=document.getElementById("txtEmail")
    const txtPassword=document.getElementById("txtPassword")

    try{
        const emailEl=txtEmail.value
        const passwordlEl=txtPassword.value
        if(!emailEl ||!isEmailValid(emailEl)) throw new Error("Email adresiniz gecersiz")

        if(!passwordlEl ||!isPasswordValid(passwordlEl)) throw new Error("Sifreniz gecersiz")
        e.target.submit();

    }catch(error){
        alert(error.message)

    }
})

const isEmailValid = (mail) => { 

    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regexEmail.test(mail);

}

const isPasswordValid = (password) => { 

    let regexPassword= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    return regexPassword.test(password)


}

/* let mail="deniz@gmail"

console.log(isEmailValid(mail)) */

console.log(isPasswordValid("Al.if1abah-Ca"))