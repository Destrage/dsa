module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    launchOptions.args.push('--user-data-dir=/home/user/.config/google-chrome/Default')
  })
}

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://mironconst.sharepoint.com/sites/ProjectProcessDevelopment?debug=true&noredir=true&debugManifestsFile=https://localhost:4321/temp/manifests.js#/projects')
  })
})