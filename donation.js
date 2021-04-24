function renderOrganiations() {
  var data = [
    {
      name: "PM CARES Fund",
      link: "https://www.pmcares.gov.in/en/",
      logo: "https://www.pmcares.gov.in/assets/donation/images/logo.png",
      summary:
        "PM-CARES fund is aimed at strengthening the fight against COVID-19.",
      location: "PAN India",
    },
    {
      name: "State and National Relief Fund",
      link:
        "https://www.investindia.gov.in/bip/resources/state-and-national-relief-funds-accepting-donations-covid-19/",
      summary:
        "Team  Sahyog, the Social Impact Initiative team at Invest India has put together a consolidated list of all such state funds and the Prime Minister's Relief Fund, the same is appended below.",
    },
    {
      name: "Goonj: Rahat COVID",
      link: "https://goonj.org/support-covid-19-affected",
      summary:
        "Under the programme Rahat, the volunteers aim to prepare kits with essentials such as dry rations and personal care products, and transport them to over a million people in areas with huge pockets of migrant labour.",
    },
    {
      name: "Ketto",
      link:
        "https://www.ketto.org/fundraiser/mission-oxygen-helping-hospitals-to-save-lives?payment=form",
      summary: "Mission Oxygen- Helping Hospitals Save Lives",
      location: "PAN India",
    },
    {
      name: "Hemkunt Foundation",
      link: "www.hemkuntfoundation.com",
      summary:
        "The Gurgaon-based NGO Hemkunt Foundation has been tirelessly working on the ground to ensure immediate help to critical Covid patients by providing oxygen cylinders.",
      location: "Mumbai, Gurgaon",
    },
    {
      name: "Khalsa Aid",
      link: "www.khalsaaid.org",
      summary:
        "The NGO is providing oxygen concentrators for free to COVID-19 patients who are in home isolation in the national capital.",
      location: "PAN India",
    },
    {
      name: "GiveIndia",
      link: "www.giveindia.org",
      summary:
        "GiveIndia is also working on the ground in an effort to provide relief to Covid-affected people. The NGO is providing free oxygen cylinders.",
      location: "New Delhi, Mumbai",
    },
    {
      name: "Milaap",
      link: "www.milaap.org",
      summary:
        "Milaap is undertaking food support programme and delivering food to covid patients isolated in different parts of Delhi. The NGO is also providing 1000 food packets to homeless people daily.",
      location: "Delhi",
    },
    {
      name: "",
      link: "",
      summary: "",
      location: "",
    },
  ];

  // get the tbody element
  const tbodyElement = document.getElementById("donation-pages");
  tbodyElement.textContent = "";

  for (let i = 0; i < data.length; i++) {
    var fund = data[i];
    // create a new table row element
    const tr = document.createElement("tr");
    tr.id = fund.name;
    // create fund column
    const fundTd = document.createElement("td");
    const fundA = document.createElement("a");
    fundA.href = fund.link;
    fundA.textContent = fund.name;
    fundTd.appendChild(fundA);

    // create summary column
    const summaryTd = document.createElement("td");
    summaryTd.textContent = fund.summary;

    // create location column
    const locationTd = document.createElement("td");
    locationTd.textContent = fund.location;

    tr.appendChild(fundTd);
    tr.appendChild(summaryTd);
    tr.appendChild(locationTd);
    tbodyElement.appendChild(tr);
  }
}
