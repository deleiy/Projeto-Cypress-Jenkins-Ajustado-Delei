pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/deleiy/Projeto-Cypress-Jenkins-Ajustado-Delei.git'
            }
        }

        stage('Instalar Dependências') {
            steps {
                bat 'npm install'
            }
        }

        stage('Executar Testes Cypress') {
            steps {
                bat 'npx cypress run'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline concluído com sucesso!'
        }
        failure {
            echo '❌ Pipeline falhou. Verifique os logs no console.'
        }
    }
}
