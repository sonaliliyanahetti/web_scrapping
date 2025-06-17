

// https://www.allabolag.se/segmentering?proffIndustryCode=10002017%2C10001965%2C10002043&host=www.allabolag.se&numEmployeesFrom=0&numEmployeesTo=400

// https://www.allabolag.se/segmentering?proffIndustryCode=10002017%2C10001965%2C10002043&host=www.allabolag.se&numEmployeesFrom=4&numEmployeesTo=500&page=2

let results = [];
for (let page = 1; page < 219; page++) {
  let url = "https://www.allabolag.se/_next/data/ZtTDTeZ89gfUsCeOV8VKg/segmentation.json?proffIndustryCode=10002017%2C10001965%2C10002043&host=www.allabolag.se&numEmployeesFrom=4&numEmployeesTo=500&page="+page;
  
  
  // console.log(url);

  let response = await fetch(url, {
    "headers": {
      "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "x-instana-l": "1,correlationType=web;correlationId=daabfbee6179fe04",
      "x-instana-s": "daabfbee6179fe04",
      "x-instana-t": "daabfbee6179fe04",
      "x-nextjs-data": "1"
    },
    "referrer": "https://www.allabolag.se/segmentering?proffIndustryCode=10002017%2C10001965%2C10002043&host=www.allabolag.se",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
  });
  
let data = (await response.json());

console.log("Reading Page Number: "+page)

let companies = data.pageProps.companies;

for (let companyID = 0;companyID < companies.length; companyID++) {
  let company = {
    name: companies[companyID].name,
    numberOfEmployees: companies[companyID].numberOfEmployees,
    Email:companies
  };

  results.push(company);

 // console.log(companies[companyID].name);
 // console.log(companies[companyID].numberOfEmployees);  
}

  // let people = data.lookalikes;
  
}


console.log(JSON.stringify(results));
