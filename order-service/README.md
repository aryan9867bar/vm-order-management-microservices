# ⚙️ Order Management Backend Service

## Overview
This backend service is part of a **Virtualization and Cloud Computing assignment**.  
It is a **Node.js + Express.js microservice** that provides REST APIs for managing orders and connects to a **MySQL database running on a separate VM**.

---

## Tech Stack
- Node.js
- Express.js
- MySQL
- VirtualBox

---

## VM Deployment
- **VM-1:** MySQL Database Server  
- **VM-2:** Node.js Backend Service  

---

## Features
- Create new orders
- Fetch all orders
- RESTful API design
- Remote database connectivity

---

## Project Structure
backend/  
│── server.js  
│── db.js  
│── routes/  
│ └── orders.js  
│── package.json

## Setup & Run

Install Dependencies
```bash
npm install
```

Start Server
```bash
node server.js
```

## Database Configuration
Ensure MySQL is running on VM-1 and update credentials in db.js.

## Testing
APIs were tested using Postman from the host machine.