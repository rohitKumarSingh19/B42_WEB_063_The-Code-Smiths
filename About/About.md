# About VendoraX

## Introduction

VendoraX is an e-commerce platform designed to provide a seamless shopping experience for users. Our platform allows users to browse, purchase, and review a wide range of products across various categories such as Health, Electronics, Stationery, Sports, Fashion, and Gadgets.

## Features

- **User Registration and Authentication**: Users can register, log in, and log out securely using JWT-based authentication.
- **Product Management**: Users can view all products, create new products, update existing products, and delete products.
- **File Uploads**: Supports image uploads for products using Multer.
- **Database Integration**: Uses MongoDB for storing user and product data.
- **Cross-Origin Resource Sharing (CORS)**: Allows cross-origin requests to ensure smooth integration with front-end applications.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Uploads**: Multer
- **Environment Variables**: dotenv
- **Cross-Origin Requests**: CORS

## Getting Started

To get started with VendoraX, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/VendoraX.git
   cd VendoraX
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=your_port
   MONGO_URI=your_mongodb_uri
   JWT_SECURITY_KEY=your_jwt_secret_key
   SALT_ROUNDS=your_salt_rounds
   ```

4. **Run the server**:

   ```sh
   npm start
   ```

5. **Access the API**:
   The server will be running on `http://localhost:3000`. You can use tools like Postman to interact with the API endpoints.

## API Endpoints

### User Routes

- `POST /user/register`: Register a new user
- `POST /user/login`: Log in a user
- `POST /user/logout`: Log out a user (requires authentication)

### Product Routes

- `GET /product`: Get all products
- `POST /product/create`: Create a new product (requires authentication and image upload)
- `PATCH /product/update/:id`: Update an existing product by ID (requires image upload)
- `DELETE /product/delete/:id`: Delete a product by ID

## Contributing

We welcome contributions from the community. If you would like to contribute to VendoraX, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

VendoraX is licensed under the MIT License.

## Contact

If you have any questions or feedback, please feel free to reach out to us at support@vendorax.com.

Thank you for using VendoraX!
