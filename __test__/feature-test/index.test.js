/**
 * Created by JingHongGang on 2022/11/30.
 */
const { Builder } = require("selenium-webdriver");

describe("__test__/feature-test/index.test.js", () => {
  let driver;
  beforeEach(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async () => driver.quit());

  it("First Selenium script", async () => {
    await driver.get("http://localhost:3000/");

    const title = await driver.getTitle();
    expect(title).toBe("Express");

    await driver.manage().setTimeouts({ implicit: 500 });
  });
});
