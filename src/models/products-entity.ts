interface Attributes {
  id: number;
  name: string;
  position: number;
  visible: boolean;
  variation: boolean;
  options: string[];
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Dimensions {
  length: string;
  width: string;
  height: string;
  packcageDimension: string; // la dimensión del paquete
}

interface Image {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}

export interface ProductEntity {
  name: string;
  slug: string;
  permalink: string;
  type: string; //Product type. Options: simple, and variable. Default is simple.
  status: string; // (post status). Options: draft, pending, private and publish. Default is publish.
  featured: boolean; //Featured product. Default is false
  shortDescription: string;
  deliveryDays: number;
  sku: string;
  minutesMount: number;
  price: string;
  regularPrice: string;
  salePrice: string;
  saleDateFrom: string; //Start date of sale price
  saleDateTo: string;
  price_html: string; //Price formatted in HTML.
  taxPercent: string; //Tax status. Options: taxable, shipping and none. Default is taxable
  taxClass: string; //Tax class Iva Normal, reducido, superrreducido.
  manageStock: boolean; //Stock management at product level. Default is false.
  stockQuantity: string;
  stockStatus: string; //Controls the stock . Options: instock, outofstock, onbackorder. Default is instock.
  weight: string;
  dimensions: Dimensions;
  reviewsAllowed: boolean; //Allow reviews. Default is true.
  relatedIds: number[];
  parent_id: number;
  categories: Category[];
  tags: string[];
  images: Image[];
  attributes: Attributes[];
  variations: number[];
  position: number;
  metaData: string[];
}
