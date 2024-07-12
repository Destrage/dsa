import { Builder, Browser, By, Key, until } from 'selenium-webdriver';

(async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get('https://mironconst.sharepoint.com/sites/ProjectProcessDevelopment?debug=true&noredir=true&debugManifestsFile=https://localhost:4321/temp/manifests.js#/projects/negotiated/new');
    } finally {
        // await driver.quit();
    }
})();
