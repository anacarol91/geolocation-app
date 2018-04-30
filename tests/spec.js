describe('Domain search testing', function() {

	var locateButton = element(by.id('locate-btn'));
	var domainInput = element(by.id('host-name-input'));
	var domainCard = element(by.id('domain-location-card'));

	beforeEach(function() {
	    browser.get('');
	    browser.waitForAngular();
	    browser.sleep(3000);
	  });

  it('should display location card 1', function() {
  	domainInput.clear();
    domainInput.sendKeys('www.google.com');
    expect(locateButton.isEnabled()).toBe(true).then(locateButton.click());

    expect(domainCard.isDisplayed()).toBe(true);
    browser.sleep(3000);
  });

  it('should display location card 2', function() {
  	domainInput.clear();
    domainInput.sendKeys('google.com');
    expect(locateButton.isEnabled()).toBe(true).then(locateButton.click());

    expect(domainCard.isDisplayed()).toBe(true);
    browser.sleep(3000);
  });

  it('should not display location card 1', function() {
    domainInput.sendKeys('google');
    expect(locateButton.isEnabled()).toBe(false);

    expect(domainCard.isDisplayed()).toBe(false);
    browser.sleep(3000);
  });

  it('should not display location card 2', function() {
    domainInput.sendKeys('g.com');
    expect(locateButton.isEnabled()).toBe(true);

    expect(domainCard.isDisplayed()).toBe(false);
    browser.sleep(3000);
  });

  it('should not display location card 3', function() {
    domainInput.sendKeys('https://www.google.com');
    expect(locateButton.isEnabled()).toBe(false);

    expect(domainCard.isDisplayed()).toBe(false);
    browser.sleep(3000);
  });
});