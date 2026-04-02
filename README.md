

🌐 **Live Demo:** https://accessable.netlify.app
# AccessAble Frontend

AccessAble is a web-based accessibility assistance platform designed to support wheelchair users by connecting them with volunteers, staff assistance, SOS support, and accessibility information in real time.

This repository contains the **frontend** of the AccessAble project, built using HTML, CSS, and JavaScript.

## Project Overview

The goal of AccessAble is to improve mobility and safety for wheelchair users by providing a simple and accessible platform where users can:

- Send SOS alerts during emergencies
- Request volunteer assistance
- Alert KSRTC staff for support
- Track volunteer support status
- Communicate through chat
- Scan QR codes for indoor accessibility guidance
- View and submit accessibility reviews

## Features

### 1. User Authentication
- Login and signup interface
- Role-based access after login
- Integration with Supabase authentication

### 2. Wheelchair User Dashboard
- Request volunteer help
- Send KSRTC staff assistance alert
- Trigger SOS emergency alert
- Access QR navigation and reviews
- Use chat system

### 3. Volunteer Module
- Volunteer registration/profile
- View and accept help requests
- Receive tracking requests
- Share live location for tracking
- Chat with users

### 4. KSRTC Staff Module
- Receive passenger assistance alerts
- Accept or reject support requests
- View alert details clearly

### 5. Bystander Module
- Track volunteer movement
- Monitor ongoing assistance flow

### 6. QR Navigation and Reviews
- QR-based indoor accessibility guidance
- Place-based review submission
- View accessibility feedback from others

### 7. Real-Time Updates
- Live request updates using Supabase Realtime
- Volunteer status updates
- Tracking flow updates
- Chat support

## Tech Stack

- HTML
- CSS
- JavaScript
- Supabase Authentication
- Supabase Database
- Supabase Realtime

## Repository Scope

This repository contains the frontend pages, styling, and client-side logic for:

- Login and signup
- Dashboards for different roles
- Request forms
- Tracking interface
- Chat pages
- QR and review interface

## Project Structure

Typical frontend files include:

- `index.html`
- `login.html`
- `role.html`
- `user_dashboard.html`
- `volunteer_dashboard.html`
- `staff_dashboard.html`
- `bystander_dashboard.html`
- `volunteer_request.html`
- `volunteer_tracking.html`
- `volunteer_tracking_requests.html`
- `chat.html`
- `reviews.html`
- `qr_scan.html`
- `css/`
- `js/`

## How to Run the Frontend

1. Clone the repository:
   ```bash
   git clone https://github.com/Devanjana2605/AccessAble-frontend.git


1. Open the project folder in VS Code  
2. Run the frontend using Live Server or open the HTML files in your browser  
3. Ensure the Supabase Project URL and API Key are correctly configured in the code  

---

## 🔗 Backend Connection

This frontend works together with the **AccessAble-server** backend repository.

The backend handles:
- SOS alert processing  
- API communication  
- Twilio SMS integration  
- Server-side logic  

---

## 🎯 Main Use Case

AccessAble is designed as a unified assistance system for:

- Wheelchair users  
- Volunteers  
- KSRTC staff  
- Bystanders  

The platform aims to improve emergency response, enhance accessibility, and provide real-time assistance support.

---

## 🚀 Future Improvements

- Advanced map-based live tracking  
- Push notifications  
- Review analytics dashboard  
- Admin panel  
- Improved accessibility testing  
- Mobile application version  

---

## 👩‍💻 Author

**Devanjana A**

---

## 📌 Note

This repository represents the **frontend part** of the full AccessAble project.  
For complete functionality, it should be used together with the backend repository.
