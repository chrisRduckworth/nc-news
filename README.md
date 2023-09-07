# NC-News
Welcome to Northcoders News, a website hosting news articles, comments and users. The live version can be found at [https://crd-northcoders-news.netlify.app/](https://crd-northcoders-news.netlify.app/).

To navigate through the website, use the links in the header. To post comments on articles, you will need to be logged in. To login, go to the login page by clicking on the link in the header, or going to `/login`. Voting on articles and comments is done by clicking on the +/- buttons.

The whole website (backend, frontend and styling) has been built by me as part of the Northcoders software development bootcamp. The backend api uses express and PostgreSQL, and the frontend uses react. The backend repo can be found [here](https://github.com/chrisRduckworth/chris-nc-news).

## Requirements
 - Node.js version 20.5.0 or later

Note: earlier versions of Node.js may work but have not been tested.

## Installation
To run this on a local machine, you will first need to follow the instructions on the backend api repo. Then:
1. `git clone https://github.com/chrisRduckworth/chris-nc-news.git` to clone the repo to your local machine
2. `cd nc-news` to change into the repo folder
3. `npm install` to install dependencies
4. `npm run dev` to host the server locally.

To view the website, go to the URL shown in the terminal (by default, `http://localhost:5173`).