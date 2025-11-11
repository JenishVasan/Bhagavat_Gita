const params = new URLSearchParams(window.location.search);
const chNo = params.get("ch");

let getCh = async (chNo)=>{
    try{
        let res = await fetch(`https://vedicscriptures.github.io/chapter/${chNo}`)
        let data =await res.json()
        let chRow = document.querySelector('.chRow')
        chRow.innerHTML = `Ch : ${chNo} `
        let verseContainer = document.querySelector(".verse-row")
        verseContainer.innerHTML =""
        for(let i = 1 ; i<= data.verses_count ; i++){ 
              await getVerse(chNo, i)
        }
    }catch(err){
        console.log("error in catch :" ,err)
    }
}
getCh(chNo)

async function getVerse(chNo, verse) {
  try {
    const res = await fetch(`https://vedicscriptures.github.io/slok/${chNo}/${verse}`);
    const data = await res.json();
    let verseContainer = document.querySelector(".verse-row")
    
    verseContainer.innerHTML += `<div class="col-10 shadow-lg mt-5  rounded-4 verse-card">
                    <p class="fs-4 text-center fw-semibold">Slok No: ${data.verse}</p>
                    <p> <strong>Slok : ${data.slok} </strong></p>
                    <div class="transliteration">
                        <h3>Translation : </h3>
                        <div class="pt-3"> <strong>Hindi : ${data.chinmay.hc}</strong></div>
                        <div class="pt-3"> <strong>Eng : ${data.san.et}</strong></div>
                    </div>
                </div>`
            console.log()
  } catch (err) {
    console.error(`Error fetching verse ${verse}:`, err);
  }
}
