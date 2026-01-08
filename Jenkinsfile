
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Faz o checkout do seu repositório
                git branch: 'main', url: 'https://github.com/deleiy/Projeto-Cypress-Jenkins-Ajustado-Delei.git'
            }
        }

        stage('Instalar Dependências') {
            steps {
                // Instala as dependências do projeto
                bat 'npm install'
            }
        }

        stage('Executar Testes') {
            steps {
                // Executa os testes via script npm
                bat 'npm test'
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
