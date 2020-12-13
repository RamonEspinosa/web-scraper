import puppeteer from 'puppeteer';
export const getBrowser = async () => {
    return puppeteer.launch();
}
export const getContent = async (browser, url) => {
    const tab = await browser.newPage();
    await tab.goto(url);
    return tab.content();
}