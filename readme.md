# CYBERPUERTA WEB SCRAPER

## Description

This is a javascript web scraper that explores a mexican IT ecommerce called [cyberpuerta](https://www.cyberpuerta.mx/). It is useful in case you are looking for great deals and discounts!

## Prerequisites

- Node.js ^14.15.1
- PM2

## Installation guide

1. Clone the repository
2. Create a new `.env` file by cloning `.env.example` and setting the environment variables you will use.
3. Run `npm i` to install all dependencies
4. Edit the processor function located at `src/processor.js`.
5. Run `npm start` and watch how the scraper does its magic.
6. You may also run `npm run start-pm2` to allow the scraper to work as a cron job using pm2.

## Contributing

1. Create a new feature branch
2. To commit your changes, please follow the next guidelines

```
- Specify the type of commit
feat: The new feature you're adding
fix: A bug fix
style: Feature and updates related to styling
refactor: Refactoring a specific section of the codebase
test: Everything related to testing
docs: Everything related to documentation
chore: Regular code maintenance.

- Separate the subject from the body with a blank line
- Your commit message should not contain any whitespace errors
- Remove unnecessary punctuation marks
- Do not end the subject line with a period
- Capitalize the subject line and each paragraph
- Use the imperative mood in the subject line
- Use the body to explain what changes you have made and why you made them.
- Do not assume the reviewer understands what the original problem was, ensure you add it.
- Do not think your code is self-explanatory
```
3. Push to the branch
4. Open a pull request

## License
MIT License
