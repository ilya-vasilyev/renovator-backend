import type { Struct, Schema } from '@strapi/strapi';

export interface ConfiguratorSubOption extends Struct.ComponentSchema {
  collectionName: 'components_configurator_sub_options';
  info: {
    displayName: 'sub-option';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    geometry_name: Schema.Attribute.Text;
    material_assignments: Schema.Attribute.JSON;
    metrics: Schema.Attribute.JSON;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ConfiguratorSubControl extends Struct.ComponentSchema {
  collectionName: 'components_configurator_sub_controls';
  info: {
    displayName: 'sub-control';
    icon: 'expand';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['buttons', 'select', 'radio']>;
    options: Schema.Attribute.Component<'configurator.sub-option', true>;
  };
}

export interface ConfiguratorOption extends Struct.ComponentSchema {
  collectionName: 'components_configurator_options';
  info: {
    displayName: 'Option';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    geometry_name: Schema.Attribute.Text;
    material_assignments: Schema.Attribute.JSON;
    controls: Schema.Attribute.Component<'configurator.sub-control', true>;
    metrics: Schema.Attribute.JSON;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ConfiguratorGroup extends Struct.ComponentSchema {
  collectionName: 'components_configurator_groups';
  info: {
    displayName: 'Group';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    group_name: Schema.Attribute.String & Schema.Attribute.Required;
    group_description: Schema.Attribute.String;
    group_icon: Schema.Attribute.String;
  };
}

export interface ConfiguratorControl extends Struct.ComponentSchema {
  collectionName: 'components_configurator_controls';
  info: {
    displayName: 'Control';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['buttons', 'select', 'radio']>;
    belongs_to_group: Schema.Attribute.String;
    options: Schema.Attribute.Component<'configurator.option', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'configurator.sub-option': ConfiguratorSubOption;
      'configurator.sub-control': ConfiguratorSubControl;
      'configurator.option': ConfiguratorOption;
      'configurator.group': ConfiguratorGroup;
      'configurator.control': ConfiguratorControl;
    }
  }
}
