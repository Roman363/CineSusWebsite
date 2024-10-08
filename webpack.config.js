const path = require('path');

module.exports = 
{
  mode: 'development',
  entry: {
    index: './src/index.js',
    auth: './src/auth.js',
    createUser: './src/createUser.js',
    config: './src/config.js',
    detailpage: './src/detailpage.js',
    paymentPage: './src/paymentPage.js',
    purchasepage: './src/purchasepage.js',
    movieSelect: './src/movieSelect.js',
    gatherData: './src/gatherData.js',
    rewardsPage: './src/rewardsPage.js',
    adminPage: './src/adminPage.js',
    aboutUs: './src/aboutUs.js',
    updateInfo: './src/updateInfo.js'},
  
    output: 
  {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].bundle.js'
  },
  
  watch: true
}