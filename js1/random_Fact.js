// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getfacts();
//     console.log(fact);
//     let p = document.querySelector("#para");
//     p.innerText = fact;
// }); 

// let url = "https://catfact.ninja/fact";

// async function getfacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e) {
//         console.log("Error - ", e);
//         return "No fact found";
//     }
// } 

let url = "http://universities.hiplobs.com/search?name=";

let country = "nepal";

async function getcolleges() {
    try {
        let data = await axios.get(url+country);
        console.log(data);
    }
    catch(err) {
        console.log("error");
    }
} 
