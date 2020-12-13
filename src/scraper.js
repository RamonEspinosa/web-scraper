import $ from "cheerio";
import config from "./config.js";
import { getBrowser, getContent } from "./browser.js";
/**
 * Searches for a link in the navigation that redirects you to the next page
 * @param {string} html
 */
export const nextPageLink = (html) => {
  const link = $('a.next:contains("Siguiente")', html);
  if (link && link[0]) {
    return link[0].attribs.href;
  }
};
/**
 *
 * @param {string} html - the html content of the page you will look the products into
 * @returns an array containing the list of products
 */
export const getProducts = (html) => {
  const products = $(".emproduct_right", html);
  const list = [];
  Object.keys(products).forEach((key) => {
    // only use the products, skip other elements such as options, length, prevObject
    if (Number.isInteger(+key)) {
      const product = products[key];
      const title = $("a[id|=productList]", product).text().replace(/\n/g, "");
      const href = $("a[id|=productList]", product).attr("href");
      const oldPrice = $("span.oldPrice > del", product)
        .text()
        .replace(/[^0-9.-]+/g, "");
      const currentPrice = $("label.price", product)
        .text()
        .replace(/[^0-9.-]+/g, "");
      const available = $("div.emstock > span", product).text();
      const deliveryCost = $("div.emdeliverycost > span.deliveryvalue", product)
        .text()
        .replace(/[^0-9.-]+/g, "");
      const percentOff = $("div.percentbox > span.percent", product).text().replace('%', '');
      const save = $("div.percentbox > span.absolute", product).text(); // how much money you will save on this product
      const data = {
        title,
        href,
        oldPrice,
        currentPrice,
        available,
        deliveryCost,
        percentOff,
        save,
      };
      list.push(data);
    }
  });
  return list;
};
/**
 *
 * @param {Object} Navigator - An object containing the browser to use and the url to explore
 * @param {Function} processBatch - A callback function that will trigger each time a list of products is fetched
 */
export const navigate = async ({ browser, url }, processBatch) => {
  const html = await getContent(browser, url);
  // get a list of all products
  const productList = getProducts(html);
  await processBatch(productList);
  const next = nextPageLink(html);
  if (next) {
    // go to next page
    return await navigate({ browser, url: next }, processBatch);
  } else {
    return "No more products";
  }
};

/**
 * Starts exploring the page
 * @param {Function} processBatch - A callback function that will trigger each time a list of products is fetched
 */
const start = async (processBatch) => {
  const browser = await getBrowser();
  return navigate({ browser, url: config.category }, processBatch);
};

export default start;
