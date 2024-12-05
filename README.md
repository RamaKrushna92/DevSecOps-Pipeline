# DevSecOps Automated CI/CD Pipeline
This project focuses on building a seamless DevSecOps pipeline that integrates development, security, and deployment processes. The pipeline automates key actions, ensuring that code commits trigger a series of events, from version control to deployment, while also incorporating security scans to detect vulnerabilities early.

  
![image](https://github.com/user-attachments/assets/f3d7a98f-e342-4c61-a7ed-03cae93c8d21)

**--> Workflow Overview:**
**Code Commit & Git Version Control:**
Developers commit their code to a Git repository, where each feature is version-controlled.

**Automated Build Trigger (Jenkins):**
Whenever a code push occurs, a webhook notifies Jenkins to trigger an automated build process.

**CI/CD Build Process:**
Jenkins performs the following actions:
Git Clone: Clones the latest code from the repository.
Build: Compiles and prepares the code for further processing.
Security Scan (Trivy): Uses Trivy to scan Docker images for vulnerabilities, ensuring code is secure before deployment.
Docker Image Build: Once the image passes security checks, it is built and prepared for deployment.

**Docker Image Management:**
The validated Docker image is pushed to the Docker registry for storage and access.

**Automated Deployment:**
The latest Docker image is pulled from the registry and deployed to EC2 instances using Ansible playbooks, automating the infrastructure management and ensuring consistent deployment.


