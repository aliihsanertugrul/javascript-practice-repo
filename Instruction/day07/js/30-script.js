function hesapla(){

    let maasEl=document.querySelector("#inpMaas")
    let resultEl=document.querySelector("#result")
    let statusEl=document.querySelector("input[name='durum']:checked")

    let maas= Number( maasEl.value)
    let status=statusEl.value

  maas=status=="emekli" ? maas*=0.9 : maas*=0.95;

resultEl.innerHTML=`Kesintiden sonraki maas: ${maas.toFixed(2)}'Tldir`

maasEl.value=""


}