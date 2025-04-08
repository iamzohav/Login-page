# Login Page Project

A simple, responsive login page with client-side validation.

## Features
- Clean, modern UI design
- Responsive layout that works on mobile and desktop
- Client-side form validation
- Easy to deploy with Docker

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Docker (for containerization)

## Installation

### Without Docker
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/login-page.git

With Docker
1. Build the Docker image:
docker build -t login-page .

2. Run the container:
docker run -d -p 8080:80 login-page

Project Structure
login-page/
├── Dockerfile
├── index.html
├── script.js
├── style.css
└── README.md

License

### Dockerfile
```dockerfile
# Use official nginx image as the base image
FROM nginx:alpine

# Copy the static files to nginx's default public folder
COPY index.html /usr/share/nginx/html
COPY style.css /usr/share/nginx/html
COPY script.js /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]

Workflow:
The project follows a simple development workflow starting with setting up the repository on GitHub. The HTML structure is created in index.html, styled with CSS in style.css, and interactive functionality is added via JavaScript in script.js. Once the frontend is tested locally, the application is containerized using the provided Dockerfile for easy deployment. The README.md documents setup, usage, and project details. Changes are committed to Git with descriptive messages, and the Docker image can be pushed to a registry (like Docker Hub) for deployment on any platform supporting containers. This ensures a consistent environment from development to production.
