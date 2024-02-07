// /schemas/marketItems.ts
import { defineType, defineField } from 'sanity';

export const marketItems = defineType({
  name: 'marketItems',
  title: 'Market Items',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'contractAddress',
      type: 'string',
      title: 'Contract Address',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
    }),
    defineField({
      name: 'createdBy',
      type: 'reference',
      to: [{ type: 'users' }],
      title: 'Created By',
    }),
    defineField({
      name: 'volumeTraded',
      type: 'number',
      title: 'Volume Traded',
    }),
    defineField({
      name: 'floorPrice',
      type: 'number',
      title: 'Floor Price',
    }),
    defineField({
      name: 'owners',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'users' }] }],
      title: 'Owners',
    }),
    defineField({
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
    }),
    defineField({
      name: 'bannerImage',
      type: 'image',
      title: 'Banner Image',
    }),
  ],
});