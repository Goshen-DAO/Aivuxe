// /schemas/users.ts
import { defineType, defineField } from 'sanity';

export const users = defineType({
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    defineField({
      name: 'userName',
      type: 'string',
      title: 'User Name',
    }),
    defineField({
      name: 'walletAddress',
      type: 'string',
      title: 'Wallet Address',
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
    defineField({
      name: 'twitterHandle',
      type: 'string',
      title: 'Twitter Handle',
    }),
    defineField({
      name: 'igHandle',
      type: 'string',
      title: 'Instagram Handle',
    }),
  ],
});