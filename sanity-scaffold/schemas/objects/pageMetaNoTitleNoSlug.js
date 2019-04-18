// Usado pra páginas com url já definida
export default {
  name: 'pageMeta',
  type: 'object',
  title: 'Informação básica sobre a página',
  fieldsets: [
    {
      name: 'seo',
      title: 'Campos para SEO'
    },
    {
      name: 'social',
      title: 'Mídias Sociais'
    }
  ],
  fields: [
    {
      name: 'seoTitle',
      title: 'Título de SEO',
      type: 'string',
      validation: Rule =>
        Rule.min(40)
          .max(60)
          .warning('Títulos para SEO devem conter entre 40 e 60 caracteres'),
      fieldset: 'seo'
    },
    {
      name: 'seoDescription',
      title: 'Description Meta (até 140 caracteres)',
      validation: Rule =>
        Rule.min(80)
          .max(140)
          .warning(
            'A descrição para SEO deve conter entre 80 e 140 caracteres'
          ),
      type: 'text',
      fieldset: 'seo'
    },
    {
      name: 'ogImage',
      title: 'Imagem para mídia social',
      description: 'Idealmente na dimensão 1200x628 para aparecer bem no Facebook, Instagram e LinkedIn',
      type: 'image',
      fieldset: 'social'
    }
  ]
}
