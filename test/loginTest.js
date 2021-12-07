module.exports =
{
    'Verify Login'(browser)
    {
        
       // browser
        let loginPage = browser.page.loginPage();
        var credentials;
        credentials = require('/Volumes/Macintosh HD - Data/Self Learning/Night Watch/hrms_automation/test/inputData.json');
        loginPage
        //.url(credentials.url)
            .navigate()
            .setValue('@userName',credentials.username)
            .setValue('@password',credentials.password)
            .click('@loginBtn')
            .click('@cancelBtn')
            .click('@cancelBtn')
            .pause(5000)
            .expect.element('@title').text.to.equal("Dashboard")
    }
}