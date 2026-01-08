pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/deleiy/Projeto-Cypress-Jenkins-Ajustado-Delei.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Usamos 'bat' para Windows e forçamos a instalação do Cypress
                bat 'npm ci'
                bat 'npx cypress install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run --browser electron --headless'
            }
        }
    }
}