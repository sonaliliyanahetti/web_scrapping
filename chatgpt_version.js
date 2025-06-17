let results = [];

for (let page = 1; page < 219; page++) {
  let url = "https://www.allabolag.se/_next/data/ZtTDTeZ89gfUsCeOV8VKg/segmentation.json?proffIndustryCode=10002017%2C10001965%2C10002043&host=www.allabolag.se&numEmployeesFrom=4&numEmployeesTo=500&page=" + page;
  console.log("🔗 Fetching:", url);

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
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
  });

  let data = await response.json();
  let companies = data?.pageProps?.companies || [];

  if (companies.length === 0) {
    console.log("No companies on page", page);
    break;
  }

  results.push(...companies);

  console.log("✅ Page", page, ":", companies.length, "companies");
  console.log("Example:", companies[0]?.name, "-", companies[0]?.numberOfEmployees);

  await new Promise(r => setTimeout(r, 500)); // polite delay
}

console.log("🎉 Done. Total companies fetched:", results.length);
console.log(JSON.stringify(results));
