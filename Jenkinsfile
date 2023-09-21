pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.38.0-jammy'
    } 
  }
  parameters {
        string(name: 'BROWSER', defaultValue: 'chromium', description: 'Browser to run tests in')
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
        sh 'xvfb-run npm run test-${BROWSER}'
      }
      post {
        always {
          publishHTML ([
            allowMissing: false,
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