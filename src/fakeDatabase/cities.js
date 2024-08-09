const cities = [
    "New York",
    "London",
    "Tokyo",
    "Paris",
    "Moscow",
    "Berlin",
    "Sydney",
    "Los Angeles",
    "Toronto",
    "Beijing",
    "São Paulo",
    "Mexico City",
    "Mumbai",
    "Cairo",
    "Buenos Aires",
    "Lagos",
    "Istanbul",
    "Shanghai",
    "Seoul",
    "Jakarta",
    "Bangkok",
    "Rio de Janeiro",
    "Dubai",
    "Hong Kong",
    "Singapore",
    "Madrid",
    "Rome",
    "Kuala Lumpur",
    "Johannesburg",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Fort Worth",
    "Columbus",
    "Indianapolis",
    "Charlotte",
    "San Francisco",
    "Washington, D.C.",
    "Boston",
    "Nashville",
    "Detroit",
    "Oklahoma City",
    "Las Vegas",
    "Portland",
    "Memphis",
    "Louisville",
    "Baltimore",
    "Milwaukee",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Sacramento",
    "Kansas City",
    "Atlanta",
    "Miami",
    "Denver",
    "Orlando",
    "Tampa",
    "New Orleans",
    "Cleveland",
    "Minneapolis",
    "Saint Louis",
    "Pittsburgh",
    "Cincinnati",
    "Honolulu",
    "Anchorage",
    "Raleigh",
    "Durham",
    "Lexington",
    "Chattanooga",
    "Buffalo",
    "Reno",
    "Madison",
    "Lubbock",
    "Lincoln",
    "Greensboro",
    "Plano",
    "Henderson",
    "Fort Lauderdale",
    "Baton Rouge",
    "Charleston",
    "Little Rock",
    "Wichita",
    "Birmingham",
    "Des Moines",
    "Boise",
    "Salt Lake City",
    "Spokane",
    "Tacoma",
    "Aurora",
    "Colorado Springs",
    "Fayetteville",
    "Augusta",
    "Mobile",
    "Tulsa"
  ];

  const selectedCities = [];

  var index = 0;
  while(index < 8){
    var selectedCity = cities[Math.floor(Math.random() * 100)];
    if(selectedCities.includes(selectedCity)){
      continue;
    }
    selectedCities[index] = selectedCity;
    index++;
  }

  for (let index = 0; index < selectedCities.length; index++) {
    selectedCities[index] = {name: selectedCities[index], id: index};
    
  }

  /*
  var index = 0;
  while(index < 8){
    var selectedCity = Math.floor(Math.random() * 10);
    if(selectedCities.includes(selectedCity)){
        continue;
    }
    index++;
  }

  for (let index = 0; index < selectedCities.length; index++) {
    selectedCities[index] = {name: cities[selectedCities[index]], id: index};
    
  }
  */
  

  export default selectedCities;
  