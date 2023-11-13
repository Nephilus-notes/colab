export interface Article {
    section: string;
    subsection: string;
    title: string;
    abstract: string;

    url: string;
    uri:string;
    byline: string;
    item_type: string;
    updated_date: string;
    created_date: string;
    published_date: string;
    material_type_facet: string;
    kicker: string;
    des_facet?: Array<any>;
    org_facet?: Array<any>;
    per_facet?: Array<any>;
    geo_facet?: Array<any>;
    multimedia?: Array<any>;
    short_url: string;
}