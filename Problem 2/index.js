const trainTickets = {
  Kiev: "Prague",
  Prague: "Zurich",
  Zurich: "Amsterdam",
  Amsterdam: "Barcelona",
  Barcelona: "Berlin",
  Berlin: ["Kiev", "Amsterdam"],
  Paris: "Skopje",
  Skopje: "Paris",
};

function findRoute(startCity, tickets) {
  const route = [startCity];
  let currentCity = startCity;

  while (tickets[currentCity]) {
    const nextCity = tickets[currentCity];
    if (Array.isArray(nextCity)) {
      for (const city of nextCity) {
        if (!route.includes(city)) {
          route.push(city);
          currentCity = city;
          break;
        }
      }
    } else {
      if (route.includes(nextCity)) {
        break;
      }
      route.push(nextCity);
      currentCity = nextCity;
    }
  }

  return route;
}

const startCity = "Kiev";
const route = findRoute(startCity, trainTickets);

console.log("Your son's travel route:");
console.log(route.join(" -> "));
