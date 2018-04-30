exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  baseUrl: 'http://localhost:5000/',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
            args: ['allow-file-access-from-files']
        }
  }
}