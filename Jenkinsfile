pipeline {
    agent { 
        label 'maven'
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('krishnachennaidocker')
        ANSIBLE_PRIVATE_KEY = credentials('ansiblecredentials')
    }
    stages{
        stage('Clean Workspace') {
            steps {
                echo    '+++++++++++++ DevSecOps Pipeline Is Starting +++++++++++++'
                deleteDir()
            }
        }
        stage('Remove Old Images'){
            steps{
                echo 'Removing Docker images...'
                sh 'sudo docker image prune --force'
            }
        }
        stage ("GitCheckOut") {
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/RamaKrushna92/DevSecOps-Pipeline.git']])
            }
        }
        stage('BuildImage') {
            steps{
                echo 'Building Docker image...'
                sh "sudo docker build -t krishnachennaidocker/node-app-image:jenkins-2 -f ${WORKSPACE}/Dockerfile ."
            }
        }
        stage('VerifyImages') {
            steps{
                echo 'Verifying Docker image...'
                sh "sudo docker images -a"
            }
        }
        stage('Image Scan Trivy') {
            steps{
                sh 'sudo trivy image --scanners vuln krishnachennaidocker/node-app-image:jenkins-2'
            }
        }
        stage('Login to DockerHub') {
            steps{
            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Push Images into Hub'){
            steps{
                sh 'sudo docker push krishnachennaidocker/node-app-image:jenkins-2'
            }
        }
        stage('Start Container') {
            steps{
                sh 'ansible-playbook -i /etc/ansible/hosts --private-key $ANSIBLE_PRIVATE_KEY ${WORKSPACE}/deployment.yml'
            }
        }
        
    }
}
