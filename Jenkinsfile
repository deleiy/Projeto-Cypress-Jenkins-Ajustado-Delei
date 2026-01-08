pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/deleiy/Projeto-Cypress--Jenkins-do-zero.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --browser electron --headless'
            }
        }
    }
}
