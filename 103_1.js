let results = [];
for (let page = 1; page < 103; page++) {
  let url = "https://www.allabolag.se/_next/data/ZtTDTeZ89gfUsCeOV8VKg/segmentation.json?host=www.allabolag.se&proffIndustryCode=10002115&companyType=AB&numEmployeesFrom=3&numEmployeesTo=500&page=" + page;

  console.log("🔗 Fetching:", url);

  let response = await fetch(url, {
    "headers": {
      "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "x-instana-l": "1,correlationType=web;correlationId=23cdbb68b613be8b",
      "x-instana-s": "23cdbb68b613be8b",
      "x-instana-t": "23cdbb68b613be8b",
      "x-nextjs-data": "1"
    },
    "referrer": "https://www.allabolag.se/segmentering?host=www.allabolag.se",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
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
