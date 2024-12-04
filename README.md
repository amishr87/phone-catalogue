
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
git clone https://github.com/msrivas-7/phone-catalog.git
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

### 4. Import the database

1. After creating your `.env` file, create a database phone_catalog: `create database phone_catalog` by logging into your psql user.
   
2. Run `psql -U username -d phone_catalog -f output_file.sql` and replace username with your psql username. Make sure you run this command in the root repository folder. That is where `output_file.sql` is stored.

### 5. Start the Frontend
```bash
npm start
```

---

## API Endpoints

- `GET /phones`: Fetch all phone models.
- `GET /specifications/:id`: Fetch detailed specifications for a phone.
- `GET /add-phone`: Add a new phone model and its details to the database.

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

- **Mehul Srivastava**
- **Siddhant Jain**
- **Neel Madhav Dogra**
- **Anand Krishna Mishra**

---

## Pages

### Phone Catalogue 
<img width="1495" alt="Screenshot 2024-12-04 at 3 58 31 AM" src="https://github.com/user-attachments/assets/88ae12dc-077b-49c9-918d-4add85f0a69d">

### Search Phone
<img width="1496" alt="Screenshot 2024-12-04 at 3 59 39 AM" src="https://github.com/user-attachments/assets/9f0229ea-7896-4ee7-9ffc-e378ae029b8a">

### Compare Phones
<img width="1496" alt="Screenshot 2024-12-04 at 4 00 48 AM" src="https://github.com/user-attachments/assets/cb20f89d-28fe-4a0b-9700-178033f24a33">

### Add Phone
<img width="1496" alt="Screenshot 2024-12-04 at 3 59 07 AM" src="https://github.com/user-attachments/assets/4449f04a-0b7d-4b55-b320-278cdf0e2a5e">
