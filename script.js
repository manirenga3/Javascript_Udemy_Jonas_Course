'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const [currencyName] = Object.values(data.currencies);
  const language = Object.values(data.languages);
  const html = `
<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 10000000
    ).toFixed(1)}C People</p>
    <p class="country__row"><span>🗣️</span>${language[0]}</p>
    <p class="country__row"><span>💰</span>${currencyName.name}</p>
  </div>
</article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

/* //////////////////////////////////////////////////////////////////////
// AJAX call
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(request.responseText);
    const [currencyName] = Object.values(data.currencies);
    const language = Object.values(data.languages);
    const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 10000000
      ).toFixed(1)}C People</p>
      <p class="country__row"><span>🗣️</span>${language[0]}</p>
      <p class="country__row"><span>💰</span>${currencyName.name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('india');
getCountryData('usa');
getCountryData('portugal');
*/

/* /////////////////////////////////////////////////////////////////////
// Callback Hell
const getCountryAndNeighbour = function (country) {
  // Get country (1)
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // Render country (1)
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;
    if (!neighbour) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      // Render neighbour country (2)
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('india');
// getCountryAndNeighbour('usa');
*/

/* //////////////////////////////////////////////////////////////////////
// Promises and Fetch API
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};
getCountryData('india');
*/

/* /////////////////////////////////////////////////////////////////////
// Chaining promises
const getJson = function (url, errorMsg) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${response.status} error. ${errorMsg}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // Country (1)
  getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      // Neighbour (2)
      const neighbours = data[0].borders;
      if (!neighbours) throw new Error('No neighbour found');
      const neighbour = data[0].borders[0];
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err =>
      renderError(`Something went wrong. ${err.message}. Try again.`)
    )
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountryData('india');
});

getCountryData('australia');
*/

/* /////////////////////////////////////////////////////////////////////
// Promises
Promise.resolve('Resolved').then(x => console.log(x));
Promise.reject('Rejected').catch(x => console.error(x));

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery is happening');
  setTimeout(function () {
    if (Math.random() <= 0.5) resolve('You win');
    else reject(new Error('You lose'));
  }, 3000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying
const wait = sec => new Promise(res => setTimeout(res, sec * 1000));

wait(1)
  .then(() => {
    console.log('1 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 sec passed');
    return wait(1);
  })
  .then(() => console.log('4 sec passed'));
*/

/* /////////////////////////////////////////////////////////////////////
// Promisifying geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    // In simple
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

btn.addEventListener('click', function () {
  getPosition().then(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
      .then(response => {
        if (!response.ok) throw new Error('Maximum limit reached');
        return response.json();
      })
      .then(data => {
        console.log(`You are in ${data.city}, ${data.country}`);
        return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
      })
      .then(res => res.json())
      .then(data => renderCountry(data[0]))
      .catch(err =>
        console.log(`Something went wrong. ${err.message}. Try again.`)
      )
      .finally(() => (countriesContainer.style.opacity = 1));
  });
});
*/

/* /////////////////////////////////////////////////////////////////////
// Async await
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Maximum API limit reached');
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country data');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    renderError(`Something went wrong. ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1. Getting location');

// whereAmI()
//   .then(city => console.log(`2. ${city}`))
//   .catch(err => console.error(`2. ${err.message}`))
//   .finally(() => console.log('3. Finished'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2. ${city}`);
  } catch (err) {
    console.error(`2. ${err.message}`);
  }
  console.log('3. Finished');
})();
*/

/* //////////////////////////////////////////////////////////////////////
// Running promises in parallel
// Promise.all
const getJson = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${response.status} error. ${errorMsg}`);
    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJson(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJson(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJson(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([...data1.capital, ...data2.capital, ...data3.capital]);

    const data = await Promise.all([
      getJson(`https://restcountries.com/v3.1/name/${c1}`),
      getJson(`https://restcountries.com/v3.1/name/${c2}`),
      getJson(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.flatMap(d => d[0].capital));
  } catch (err) {
    console.error(err.message);
  }
};

// get3Countries('india', 'usa', 'portugal');

// Promise.race
(async function () {
  const res = await Promise.race([
    getJson(`https://restcountries.com/v3.1/name/india`),
    getJson(`https://restcountries.com/v3.1/name/usa`),
    getJson(`https://restcountries.com/v3.1/name/portugal`),
  ]);
  console.log(res[0]);
})();

const wait = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

Promise.race([getJson(`https://restcountries.com/v3.1/name/canada`), wait(0.6)])
  .then(data => console.log(data[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
])
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Promise.any
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
])
  .then(data => console.log(data))
  .catch(err => console.error(err));
*/
