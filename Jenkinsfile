pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/deleiy/Projeto-Cypress-Jenkins-Ajustado-Delei.git'
            }
        }

        stage('Instalar Dependências') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Executar Testes Cypress') {
            steps {
                // ADICIONEI ESTA LINHA ABAIXO PARA CORRIGIR AS CORES
                ansiColor('xterm') {
                    bat 'npx cypress run'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline concluído com sucesso'
        }
        failure {
            echo '❌ Pipeline falhou. Verifique os logs'
        }
        always {
            echo '📌 Execução finalizada'
        }
    }
}

