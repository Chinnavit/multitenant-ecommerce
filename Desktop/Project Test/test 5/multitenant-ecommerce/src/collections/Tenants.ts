import type { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: {
    useAsTitle: 'slug',
  },
  fields: [
    {
      name: "name",
      required: true,
      type: "text",
      label: "StoreName",
      admin:
        {
            description:"This is the name of the store (e.g. Chinavit's Shop)",
        }
    },
    {
        name: "slug",
        type: "text",
        index: true,
        required: true,
        unique: true,
        admin: 
        {
            description:"This is the subdomain of the store (e.g. [slug].Central Art.com)",
        }
    },
    {
        name: "image",
        type: "upload",
        relationTo: "media",
    },
    {
        name: "stripeAccountId",
        type: "text",
        required: true,
        admin:{
            readOnly: true,
        },
    },
    {
        name: "stripeDetailsSubmitted",
        type: "checkbox",
        required: true,
        admin:{
            readOnly: true,
            description: "You cannot create products or process orders until you have submitted your Stripe details.",
        },
    },
  ],
};
