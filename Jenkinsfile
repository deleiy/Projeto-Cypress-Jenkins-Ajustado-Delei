pipeline {
    agent any
    environment {
        // Isso força o Cypress a ser instalado dentro da pasta do projeto
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}\\cypress_cache"
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/deleiy/Projeto-Cypress-Jenkins-Ajustado-Delei.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Usamos 'bat' para Windows
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