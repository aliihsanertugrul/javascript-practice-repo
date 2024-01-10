
function calculate(){
    // input ları al
    const txtDay = document.querySelector("#txtDay");
    const txtMonth = document.querySelector("#txtMonth");
    const txtYear = document.querySelector("#txtYear");

    // inputlardaki değerleri al
    const day = Number(txtDay.value);
    const month = Number(txtMonth.value);
    const year = Number(txtYear.value);

    // Mevcut tarihi al
    const currentDate = new Date();
    const birthDate = new Date(`${year}-${month}-${day}`)


    // kontrol et
    // eğer istenilen kriterlerde değilse geri dön

    if(!day || typeof(day) !== "number" || day<1 || day>31 ){
        alert("Invalid day")
        return; // devam etmesini engeller
    }

    if(!month || typeof(month) !== "number" || month<1 || month>12 ){
        alert("Invalid month")
        return; // devam etmesini engeller
    }

    if(!year || typeof(month) !== "number" || year<1900  ){
        alert("Invalid year")
        return; // devam etmesini engeller
    }

    if(currentDate < birthDate){
        alert("Birth date should be older than current date")
        return;
    }

    // TEST DATA
    // 2023 - 11 - 22
    // 2000 - 12 - 25
    // 22 yıl - 10 ay - 22 day

    // 2023 - 11 - 22
    // 2021 -  2 - 27
    

    // Mevcut tarihi gün ay ve yıl olarak ayır
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth()+1;
    const currentDay = currentDate.getDate();

    console.log(currentYear, currentMonth, currentDay);

    // Mevcut tarihten doğum tarihini çıkar
    let ageYears = currentYear - year;

    let ageMonths = currentMonth - month;
    if(ageMonths < 0){
        ageYears--;
        ageMonths += 12;
    }

    let ageDays = currentDay - day;
    if(ageDays<0){
        ageMonths--;
        ageDays += day;
    }

        
    // sonucu göster
    document.querySelector("#lblYears").innerHTML = ageYears;
    document.querySelector("#lblMonths").innerHTML = ageMonths;
    document.querySelector("#lblDays").innerHTML = ageDays;

}