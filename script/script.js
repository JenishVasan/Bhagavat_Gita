 
    let chapterList = document.getElementById("Chapter")
    let verseList = document.getElementById("verse")
    
    let chapterRow = document.getElementById("chapter-card-row")
    let chapterData = ""
    function getChapterData(){

        fetch("https://vedicscriptures.github.io/chapters/")
        .then(
            data=>data.json()
        )
        .then(data=>{ 
            console.log(data)
            data.forEach(data=>{
                   chapterData += `
                        <div class="col-lg-3 col-md-4 col-sm-6 mt-4">
                        <div class="chapter-card">
                            <div class="chapter-number">Chapter ${data.chapter_number}</div>
                            <h4 class="chapter-title">${data.name}</h4>
                            <p class="chapter-subtitle">${data.translation}</p>
                            <a href="./view.html?ch=${data.chapter_number}" class="text-decoration-none read-now-btn"onclick="return getCh(${data.chapter_number})">Read Now</a>
                        </div>
                        </div>
                        `
            })
            chapterRow.innerHTML = chapterData
        })
        .catch(error =>console.error(error))
    }
    getChapterData()
   


