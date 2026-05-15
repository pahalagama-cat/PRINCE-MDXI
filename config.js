const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU25KiSBD9lY161RhFuWlER0xxacBWVLy7sQ8FFFjIzaoC1An/fYO+TM/D7mwvT0VC5jl58mT9AHlBGH7BNzD+AUpKasRxe+S3EoMx0KoowhR0QYg4AmOAJ9Zdsp2oPp8HSpIoz1mvSPYxGSwa++jI+mgwoFl+GWxM+AQeXVBWfkqC3xRsKjWSl4t+Z71avAh77Elu6dN9PrhtxLLvXHuT/naNYUmT+Ak82oqIUJLHZnnCGaYofcG3BSL0a/QLgzsXT6bPTr6whudestjZ0CWXAp6ZUvP5oZMvtaDnXbebr9HfTA3UIL5RiL47JuV1gefibqo3cVptasiNODko3tqTe1B8o89InOPQCXHOCb99WffKrZ6PnjU7rLZ3ZB7LdHWYzo1aNSJxaHjHq2kK6+sOOof9F4mv1dOgEV/Sa+mbhzt0Iq1jMtrrs7W6Te+uYawadU3DaxObvxJf0A+vnP+P7mSWh3pnQqtTb6ogDU3O/nznB2Y2hYvJDfsFdEz1bvaPmy/ST+rOPTbiM9IK0XanpTZPNdrbJ0e1lvFZ2BQRV1w9tJxd8Ukf8Yr+juXatibhFllHTVoWbizyqFPcfE90lcZuvJEzhXlynq8tp54oiVsEz0aS+30SeTwZdApp60n1bnqpBbdDlhecDQiaOqfl02tHZ3xzQjAWHl1AcUwYp4iTIn+NKVIXoLBe4YBi/iov6JuXOoKj5nabB/blvFkcateH06XCLjrOekgeGQJOp6ZVsifQBSUtAswYDm3CeEFvM8wYijED4z//6oIcX/nb4Fq4odAFEaGMb/KqTAsUfkz14yMKgqLK+eqWB3p7wBSM+59hzDnJY9bqWOWIBidSY/2EOAPjCKUM/+wQUxy+x35mt1kh5oikDIyB7lTza6XqprvPMg4tCx5iqMcQfKJ9jO1NlvtwxbzrbihfJaNawqhoDnihWou0p1CPPeun57RiGkrmz5unfygCxsB2hmogcHMh+8NJzo2L4C0LPWh8Adp+eK4Z2VALc3yN17KtaWZ/5KFTYM83lbIdQa7n2B/YJrEHq6Z32Ea6KPsHAz61aCGuSYB/BRNvQ7Ggs9Nse0ox61g7Sbvs7i/pchRyQZZ290xFA0NUSTEj+VQ4b0uJL5nRWe5e9pIWOta+MaaWvEqz0zBYb+RJfeyR+M1Q2auTSQjGYCQq6khRhIGsjMXv7FvTTgOV5bccc9AFOWr/BSv3D2O+c6dzaJge6IL0LVdRFEnuC/JQkqThWPzehj/2JX2/p8irk1q09jUi+HXt3+v+B/qbKq23+o/uLxXer5F/WUUtGPWpGWx5h+Glcoa2PLPspKclUtSR+762LLyjT+GuuJ+24PH4qwvKFPGooBkYA5b5CHQBLarWqU4eFb9B0qHj6DB226ZTxDj8dP+aZJhxlJXtjiqqOhD7Q6kLshssyxVH/GNpAGyfyQWBx9/wihx/UAcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
