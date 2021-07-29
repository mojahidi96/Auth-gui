module.exports = [
    {
        context: ['/user'],
        target: 'http://localhost:8081',
        secure: false
    },
    {
        context: ['/user'],
        target: 'http://localhost:4200',
        secure: false

    }]