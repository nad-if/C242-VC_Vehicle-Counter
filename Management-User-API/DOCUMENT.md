# API Documentation

## Authentication Endpoints

### Register User
**URL:** `/auth/register`

**Method:** `POST`

**Request Headers:**
- `Content-Type: multipart/form-data`

**Request Body:**
- `fullname` (string, required): Full name of the user.
- `email` (string, required): Email of the user.
- `password` (string, required): Password for the account.
- `role` (string, required): Role of the user, either `user` or `admin`.
- `phone` (string, optional): Phone number of the user.
- `bio` (string, optional): Short biography of the user.
- `image` (file, optional): Profile image of the user.

**Response:**
- `200 OK`: OTP successfully sent to the email.
- `400 Bad Request`: Error with message.

---

### Verify OTP
**URL:** `/auth/verify-otp`

**Method:** `POST`

**Request Body:**
- `email` (string, required): Email of the user.
- `otp` (string, required): OTP sent to the email.

**Response:**
- `200 OK`: Account activated.
- `400 Bad Request`: Invalid OTP or OTP expired.

---

### Login
**URL:** `/auth/login`

**Method:** `POST`

**Request Body:**
- `email` (string, required): Email of the user.
- `password` (string, required): Password for the account.

**Response:**
- `200 OK`: Returns token, userId, and role.
- `400 Bad Request`: Invalid email or password.

---

### Logout
**URL:** `/auth/logout`

**Method:** `POST`

**Headers:**
- `Authorization`: Bearer token

**Response:**
- `200 OK`: Logout successful.
- `400 Bad Request`: User not authenticated.

---

## User Endpoints

### Get All Users
**URL:** `/users`

**Method:** `GET`

**Headers:**
- `Authorization`: Bearer token

**Response:**
- `200 OK`: List of users with their status.
- `500 Internal Server Error`: Error fetching users.

---

### Get User Profile
**URL:** `/users/:id`

**Method:** `GET`

**Headers:**
- `Authorization`: Bearer token

**Response:**
- `200 OK`: User profile data.
- `400 Bad Request`: Error fetching user profile.

---

### Update User
**URL:** `/users/:id`

**Method:** `PUT`

**Headers:**
- `Authorization`: Bearer token

**Request Body:**
- Fields to be updated (e.g., `fullname`, `email`, `phone`, `bio`, `imageUrl`).

**Response:**
- `200 OK`: User updated successfully.
- `403 Forbidden`: Unauthorized access.
- `400 Bad Request`: Error updating user.

---

### Delete User
**URL:** `/users/:id`

**Method:** `DELETE`

**Headers:**
- `Authorization`: Bearer token

**Response:**
- `200 OK`: User deleted successfully.
- `403 Forbidden`: Unauthorized to delete users.
- `400 Bad Request`: Error deleting user.

---

## Error Handling
All responses for errors will follow the structure:
```json
{
  "error": "Error message here"
}
```

---

## Real-time Features

### User Online Status
**WebSocket Events:**
- **`user-online`**: Sent when a user comes online.
- **`users-status`**: Broadcast list of online users.

### Example:
**Client emits:**
```json
{
  "user-online": "userId"
}
```

**Server emits:**
```json
[
  "userId1",
  "userId2"
]
```

---

## Cron Jobs

### Inactive User Check
Runs every 9 minutes to set users to `offline` if inactive for more than 5 minutes.

**Endpoint:** Internal; no user interaction required.

