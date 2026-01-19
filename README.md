# 📘 Virtualization and Cloud Computing Assignment

## Title
**Deployment of a Microservice-Based Order Management System Using Virtual Machines**

---

## Course
**Virtualization and Cloud Computing**

---

## Objective
This assignment demonstrates the practical application of **virtualization concepts** by deploying a **three-tier microservice-based Order Management System** across multiple virtual machines using **VirtualBox**.  
Each application layer is hosted on a separate VM to simulate a real-world cloud deployment.

---

## Technologies Used
- VirtualBox
- Ubuntu 24.04 (AMD64)
- MySQL
- Node.js & Express.js
- React.js
- Postman

---

## Virtual Machine Configuration

| VM | Role | Technology |
|---|---|---|
| VM-1 | Database Server | MySQL |
| VM-2 | Backend Service | Node.js + Express |
| VM-3 | Frontend Application | React.js |

All VMs are connected using **NAT + Host-Only networking** to allow internet access and inter-VM communication.

---

## System Architecture
The system follows a **three-tier architecture**:

1. **Frontend (VM-3)**  
   - React-based UI  
   - Communicates with backend using REST APIs  

2. **Backend (VM-2)**  
   - Node.js microservice  
   - Handles business logic  
   - Connects to MySQL database  

3. **Database (VM-1)**  
   - MySQL server  
   - Stores order-related data  

---

## Testing
- APIs tested using **Postman**
- GET and POST APIs validated
- Successful end-to-end communication between all VMs

---

## Repository Structure
order-management-microservices/

│── backend/  
│ └── README.md  
│── frontend/  
│ └── README.md  
│── Assignment_Report.pdf  
│── README.md


---

## 📄 Assignment Report (PDF)
A detailed assignment report is included as:

[Aryan Baranwal VCC Assignment 1.pdf](./Aryan Baranwal VCC Assignment 1.pdf)

It contains:
- VM setup steps
- Network configuration
- Architecture diagram
- Implementation details
- Screenshots
- Conclusion & learning outcomes

---

## Learning Outcomes
- Hands-on experience with virtualization
- Multi-VM deployment understanding
- Microservice-based architecture
- Real-world system design exposure

---

## Author
**Aryan Baranwal**  
M.Tech (CSE)  
Virtualization and Cloud Computing

---

## Note
This repository is created strictly for **academic purposes**.
