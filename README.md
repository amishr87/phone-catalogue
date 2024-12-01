
# Phone Catalog

A responsive web application to browse and view detailed specifications of various phones. The app allows users to explore phone models, view detailed specifications, and add new models. It features a clean and modern design, leveraging React and Bootstrap for the frontend and Node.js with PostgreSQL for the backend.

---

## Features

- 📱 **Browse Phones**: View a catalog of available phones with basic details.
- 🔍 **View Details**: Click on a phone to see detailed specifications.
- 🌟 **Responsive Design**: Works seamlessly on devices of all sizes.

---

## Technologies Used

### Frontend
- React
- React-Router-Dom
- React-Bootstrap
- Axios

### Backend
- Node.js
- Express.js
- PostgreSQL
- Cors
- Dotenv

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/phone-catalog.git
cd phone-catalog
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup the Backend
1. Create a `.env` file and configure the database connection:
   ```plaintext
   DB_USER=your_postgres_username
   DB_PASSWORD=your_postgres_password
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=phone_catalog
   ```

2. Start the backend server:
   ```bash
   npm run server
   ```

### 4. Start the Frontend
```bash
npm start
```

---

## API Endpoints

- `GET /phones`: Fetch all phone models.
- `GET /specifications/:id`: Fetch detailed specifications for a phone.

---

## Folder Structure

```
phone-catalog/
├── public/                  # Static files (index.html, etc.)
├── src/
│   ├── components/          # React components
│   │   ├── PhoneList.js     # Phone catalog page
│   │   ├── PhoneDetails.js  # Phone details page
│   │   └── AddPhone.js      # Add phone form
│   ├── services/
│   │   └── api.js           # Axios API configuration
│   ├── App.js               # Main application component
│   └── index.js             # React entry point
├── server.js                # Backend server
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

---

## Contributors

- **[Mehul Srivastava]**
- **[Sid]**
- **[Neel]**
- **[Anand]**

---

Feel free to contribute or report issues! 🚀
