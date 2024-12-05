# DevSecOps Automated CI/CD Pipeline
This project focuses on building a seamless DevSecOps pipeline that integrates development, security, and deployment processes. The pipeline automates key actions, ensuring that code commits trigger a series of events, from version control to deployment, while also incorporating security scans to detect vulnerabilities early.

  
![image](https://github.com/user-attachments/assets/f3d7a98f-e342-4c61-a7ed-03cae93c8d21)

**Workflow:**

  - Developers commit their changes to Git, triggering the webhook.
  - Jenkins automatically starts the build process for both Node.js components.
  - Trivy performs security scans on Docker images to ensure no vulnerabilities are present.
  - The validated Docker image is pushed to a registry.
  - Ansible automates the deployment of the Docker image to AWS EC2 instances for live production.


