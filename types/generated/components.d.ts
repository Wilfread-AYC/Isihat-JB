import type { Schema, Struct } from '@strapi/strapi';

export interface AuthorAuthor extends Struct.ComponentSchema {
  collectionName: 'components_author_authors';
  info: {
    displayName: 'Author';
    icon: 'arrowRight';
  };
  attributes: {
    author_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    author_name: Schema.Attribute.String & Schema.Attribute.Required;
    author_quote: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentSection extends Struct.ComponentSchema {
  collectionName: 'components_content_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
  };
}

export interface JobBenefits extends Struct.ComponentSchema {
  collectionName: 'components_job_benefits';
  info: {
    displayName: 'benefits';
  };
  attributes: {
    benefit: Schema.Attribute.Blocks;
  };
}

export interface JobListItem extends Struct.ComponentSchema {
  collectionName: 'components_job_list_items';
  info: {
    displayName: 'ListItem';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'job.benefits', true>;
    requirements: Schema.Attribute.Component<'job.requirements', true>;
    responsibilities: Schema.Attribute.Component<'job.responsibilities', false>;
  };
}

export interface JobRequirements extends Struct.ComponentSchema {
  collectionName: 'components_job_requirements';
  info: {
    displayName: 'requirements';
  };
  attributes: {
    requirement: Schema.Attribute.Blocks;
  };
}

export interface JobResponsibilities extends Struct.ComponentSchema {
  collectionName: 'components_job_responsibilities';
  info: {
    displayName: 'responsibilities';
  };
  attributes: {
    responsibility: Schema.Attribute.Blocks;
  };
}

export interface SectionSections extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'sections';
    icon: 'arrowRight';
  };
  attributes: {
    subcontent: Schema.Attribute.Blocks;
    subImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'author.author': AuthorAuthor;
      'content.section': ContentSection;
      'job.benefits': JobBenefits;
      'job.list-item': JobListItem;
      'job.requirements': JobRequirements;
      'job.responsibilities': JobResponsibilities;
      'section.sections': SectionSections;
    }
  }
}
