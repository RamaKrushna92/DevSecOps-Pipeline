pipeline {
    agent { 
        label 'maven'
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('krishnachennaidocker')
        ANSIBLE_PRIVATE_KEY = credentials('ansiblecredentials')
    }
    stages{
        stage('cleanWorkspace') {
            steps {
                echo    '+++++++++++++ DevSecOps Pipeline Is Starting +++++++++++++'
                deleteDir()
            }
        }
        stage('removeOldImages'){
            steps{
                echo 'Removing Docker images...'
                sh 'sudo docker image prune --force'
            }
        }
        stage ("gitClone") {
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/RamaKrushna92/DevSecOps-Pipeline.git']])
            }
        }
        stage('buildDockerImage') {
            steps{
                echo 'Building Docker image...'
                sh "sudo docker build -t krishnachennaidocker/node-app-image:jenkins-2 -f ${WORKSPACE}/Dockerfile ."
            }
        }
        stage('verifyImages') {
            steps{
                echo 'Verifying Docker image...'
                sh "sudo docker images -a"
            }
        }
        stage('imageScanTrivy') {
            steps{
                sh 'sudo trivy image --scanners vuln krishnachennaidocker/node-app-image:jenkins-2'
		//sh 'sudo trivy image --scanners vuln --format html --output trivy-report.html krishnachennaidocker/node-app-image:jenkins-2'
            }
        }
        stage('loginDockerHub') {
            steps{
            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('pushImages'){
            steps{
		echo 'Pushing images into DockerHub...'
                sh 'sudo docker push krishnachennaidocker/node-app-image:jenkins-2'
            }
        }
        stage('deployingImages') {
            steps{
                sh 'ansible-playbook -i /etc/ansible/hosts --private-key $ANSIBLE_PRIVATE_KEY ${WORKSPACE}/deployment.yml'
            }
        }
        
    }
}
