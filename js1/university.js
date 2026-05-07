let url = "http://universities.hiplobs.com/search?name=";

let country = "nepal";

async function getcolleges() {
    try {
        let data = axios.get(url);
        console.log(data);
    }
    catch(err) {
        console.log("error");
    }
} 