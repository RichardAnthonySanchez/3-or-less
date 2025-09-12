# webpack-template

A simple Webpack starter template for generating and processing dynamic content with separate configurations for **development** and **production**.

## Features 🚀

- **[HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)** – Templating support for generating dynamic HTML files.
- **Asset, CSV, and XML Loaders** – Load and manage CSS, images, and structured data directly in your project.
- **[Webpack Dev Server](https://webpack.js.org/configuration/dev-server/)** – Watch files and apply changes in real-time _without manually refreshing_ the browser.
- **[Webpack Merge](https://github.com/survivejs/webpack-merge)** – Maintain separate configs for `development`, `production`, and `common` builds.

## Project Structure 📂

```
├── webpack.common.js   # Shared configuration
├── webpack.dev.js      # Development config
├── webpack.prod.js     # Production config
├── package.json
├── /src
│   ├── index.js        # Entry point
│   └── index.html      # Template file
└── /dist               # Bundled output (generated)
```

## Scripts 📜

```bash
# Start development server
npm start

# Build for production
npm run build
```

## Getting Started ⚡

1. Clone this repository:

   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the dev server:

   ```bash
   npm start
   ```

4. Build for production:

   ```bash
   npm run build
   ```
