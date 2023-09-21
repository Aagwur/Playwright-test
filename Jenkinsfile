pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.38.0-jammy'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('test') {
      steps {
        sh 'xvfb-run npm run test-desktop'
      }
      post {
        always {
          archiveArtifacts artifacts: '**/video.webm'
          publishHTML (target : [allowMissing: false,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'My Reports',
            reportTitles: 'The Report'])
        }
      }
    }
  }
}