// import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'featured',
//   title: 'Featured Menu Category',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'name',
//       title: 'Featured Category name',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'short_description',
//       title: 'Short Description',
//       type: 'string',
//       validation: (Rule) => Rule.max(200),
//     }),    
//     defineField({
//       name: 'restaurants',
//       title: 'Restaurants',
//       type: 'array',
//       of: [{ type: "reference", to: [{ type: "restaurant"}] }]
//     }),
//   ]
// })

export default {
  name: "featured",
  title: "Featured",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
