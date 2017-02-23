module.exports = {
    apps: [{
        name: 'aws-tutorial-2',
        script: './index.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-35-166-144-250.us-west-2.compute.amazonaws.com',
            key: '~/.ssh/Tutorial.pem',
            ref: 'origin/master',
            repo: 'git@github.com:joshmazen14/aws-tutorial-2.git',
            path: '/home/ubuntu/aws-tutorial-2',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}