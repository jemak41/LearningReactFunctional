fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});


const compose = (...fns) =>
    (arg) =>
        fns.reduce(
                (composed, f) => f(composed),
            arg
    ) 