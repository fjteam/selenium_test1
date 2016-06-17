var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.baidu.com/');
driver.findElement(By.css('#kw')).sendKeys('租租车')
driver.findElement(By.id('#su')).click();
//driver.wait(until.titleIs('webdriver - Google Search'), 1000);
// driver.quit();