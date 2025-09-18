// custom.d.ts

// CSS
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// HTML
declare module "*.html" {
  const content: string;
  export default content;
}

// Images
declare module "*.png" {
  const content: string;
  export default content;
}
declare module "*.jpg" {
  const content: string;
  export default content;
}
declare module "*.jpeg" {
  const content: string;
  export default content;
}
declare module "*.gif" {
  const content: string;
  export default content;
}
declare module "*.svg" {
  const content: string;
  export default content;
}

// Fonts
declare module "*.woff" {
  const content: string;
  export default content;
}
declare module "*.woff2" {
  const content: string;
  export default content;
}
declare module "*.eot" {
  const content: string;
  export default content;
}
declare module "*.ttf" {
  const content: string;
  export default content;
}
declare module "*.otf" {
  const content: string;
  export default content;
}

// CSV / TSV
declare module "*.csv" {
  const content: any[];
  export default content;
}
declare module "*.tsv" {
  const content: any[];
  export default content;
}

// XML
declare module "*.xml" {
  const content: Document;
  export default content;
}

// JSON
declare module "*.json" {
  const value: any;
  export default value;
}
