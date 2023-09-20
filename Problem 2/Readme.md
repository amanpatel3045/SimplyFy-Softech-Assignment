# Finding a Travel Route in JavaScript

This code demonstrates how to find a travel route based on available train tickets without using a graph data structure. It solves the problem of determining the travel route of a person who visited several cities in Europe using only train transportation.

## Problem Description

Imagine your son took a vacation through Europe without informing you about the destinations. When he returned, he mentioned the cities he visited: Amsterdam, Kiev, Zurich, Prague, Berlin, and Barcelona. He used only trains for transportation, and you have a list of available train tickets. You also know that he started his journey in Kiev. The goal is to find the route he took.

## Code Explanation

The code accomplishes this task by representing the available train tickets as a JavaScript object and using a loop to find the route. Here's a step-by-step explanation of how it works:

1. **Available Train Tickets Object**

   ```javascript
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
## We represent the available train tickets as a JavaScript object. Each key represents a starting city, and the corresponding value represents the destination city. Some cities (e.g., Berlin) have multiple destinations, so they are represented as an array.

## 1 Finding the Route Function

```
function findRoute(startCity, tickets) {
  const route = [startCity];
  let currentCity = startCity;

  while (tickets[currentCity]) {
    // ...
  }

  return route;
}
```

## We define a findRoute function that takes the starting city and the train ticket object as input. It initializes a route array with the starting city and a currentCity variable to keep track of the current city.

# 2) Looping Through the Tickets
```
while (tickets[currentCity]) {
  const nextCity = tickets[currentCity];
  if (Array.isArray(nextCity)) {
    // Handle branching paths (e.g., Berlin)
    for (const city of nextCity) {
      if (!route.includes(city)) {
        route.push(city);
        currentCity = city;
        break;
      }
    }
  } else {
    if (route.includes(nextCity)) {
      // If the destination city has been visited before, the route is complete.
      break;
    }
    route.push(nextCity);
    currentCity = nextCity;
  }
}
```
## We use a while loop to follow the train ticket connections until we reach a city that has been visited before. Inside the loop:

We check if the current city has multiple destinations (e.g., Berlin has two destinations: Kiev and Amsterdam). If so, we choose the first unvisited destination.
We add the chosen city to the route and update the currentCity.
If the destination city has been visited before, we break out of the loop as the route is complete.

## Returning the Route

```
return route;
```
## Finally, we return the route array, which contains the travel route.

# Usage

### To find the travel route of your son, simply call the findRoute function with the starting city (Kiev) and the train ticket object (trainTickets).

```
const startCity = "Kiev";
const route = findRoute(startCity, trainTickets);

console.log("Your son's travel route:");
console.log(route.join(" -> "));
```

### Running this code will output the route your son traveled, starting from Kiev and visiting all the mentioned cities.
This code provides a solution to the problem of finding a travel route using available train tickets, demonstrating how to represent and traverse the data without the need for a graph data structure.


