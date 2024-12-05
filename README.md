# DevSecOps Automated CI/CD Pipeline
Project Overview: Automated CI/CD Pipeline with Jenkins, Docker, trivy, Ansible, and AWS
In this project, I set up a DevSecOps pipeline using AWS EC2, Jenkins, Docker, and Ansible to automate the process of application deployment.

**Key Components:**

AWS EC2 Instances:
**I created three AWS EC2 instances:**

One instance for the Jenkins master.
Two instances for Jenkins slave architecture to distribute build tasks.
Another EC2 instance was set up specifically for application deployment.

**Jenkins Pipeline:**
I configured a Jenkins pipeline for continuous integration (CI).
A Jenkinsfile was written to define the steps of the pipeline, and the file was pushed to Git for version control.


**Trivy image Security scan:**
Trivy installed and intgrated with jenins to perform the verified images vulnerbiltity scan.

**Ansible Playbook:**
I wrote an Ansible playbook to automate the deployment of Docker images and the creation of containers.
This playbook was pushed to Git and is executed as part of the deployment process.
Port Configuration:

**I enabled the following ports on the EC2 instances:**
Port 22 for secure SSH connections.
Port 8080 for Jenkins web access.
Port 3000 for the Docker container to publish the application.
This setup ensures an automated, secure, and efficient process for continuous integration and deployment, leveraging Jenkins for automation, Docker for containerization, and Ansible for configuration management.

  
![image](https://github.com/user-attachments/assets/f3d7a98f-e342-4c61-a7ed-03cae93c8d21)

**Workflow:**

  - Developers commit their changes to Git, triggering the webhook.
  - Jenkins automatically starts the build process for both Node.js components.
  - Trivy performs security scans on Docker images to ensure no vulnerabilities are present.
  - The validated Docker image is pushed to a registry.
  - Ansible automates the deployment of the Docker image to AWS EC2 instances.


