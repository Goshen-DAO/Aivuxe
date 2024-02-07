import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { users } from './schemas/users';
import { marketItems } from './schemas/marketItems';

export default defineConfig({
  name: 'default',
  title: 'Aivuxe Exchange',
  projectId: 'a8fvy3ck', // Replace with your actual project ID
  dataset: 'production', // Replace with your actual dataset name

  plugins: [
    structureTool({
      // You can customize structure tool options here if needed
    }),
    // Add other plugins as needed
  ],

  schema: {
    types: [users, marketItems],
    // Add other schema types as needed
  },
});
