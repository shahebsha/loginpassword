let username = "admin"
    let password = "12345"

    let user = document.querySelector(".username")
    let pass = document.querySelector(".password")
    let login = document.querySelector(".login-page")
    let button = document.querySelector(".btn")

    let input = document.querySelector(".input")
    let search = document.querySelector(".search")
    let age = document.querySelector(".age")
    let des = document.querySelector(".des")
    let power = document.querySelector(".power")
    let images = document.querySelector(".img")
    let superhero = document.querySelector(".super-hero")
    let naam = document.querySelector(".namee")

    let api = "./data.json"

    button.addEventListener("click",(e)=>{
        if(user.value == username && pass.value == password){
            e.preventDefault()
            login.style.display = "none"
            superhero.style.display = "block"

        }else{
            alert("Error")
        }
    })


    // .btn1.addEventListener("click",()=>{
    //     login.style.display = "none"
    // })

    async function getdata(api){
        rdata = await fetch(api);
        jsdata = await rdata.json();
        return jsdata;

    }

    function card(){
    getdata(api).then((jsdata)=>{
        jsdata.forEach(element => {
           if(element.name == input.value){
            naam.textContent = element.name
            age.textContent = element.age
            des.textContent = element.description
            power.textContent = element.Power
            images.src = element.img
            input.style.display = "none"
            search.style.display = "none"

           }
        });
    }).catch((err)=>{
        console.log(err);
        
    })
}