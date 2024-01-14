# MERN based Restaurant Website

Website is available at [BangBangSeaFood](https://bangbangseafood.com/home).

## Getting Started

### Prerequisites

Make sure you have NodeJS, NPM and Git installed on your machine. You can download them
from the following links:

- [NodeJS](http://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Installation

Clone the repository and install the dependencies.

```bash
git clone https://github.com/DawoodMehmood/Bangbangseafood.git
npm install
cd backend
npm install
```

### Configuration

Create a `.env` file in the root directory of the project and add the following:

```bash
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
PORT=5000
ALLOW_ADMIN_SETUP=false
```

Replace `<your_mongodb_uri>` with your MongoDB connection string and `<your_jwt_secret>` with a random string. Change `ALLOW_ADMIN_SETUP` to `true` for creating new admins.

### Running

To start the application in development mode (with file watching) run these commands in two separate terminal sessions:

```bash
npm start
cd backend
npm run dev
```

1. In the project root directory, you can run `npm start` to start the frontend server.
   Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

2. Run `npm run dev` in the backend directory to start the backend server.
   Runs the app in the development mode with nodemon.

### Deployment

To deploy the application in production mode run this command in root directory:

```bash
npm run build
```
