// src/pages/llms.txt.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://kgtoliter.com';
  const contactEmail = 'contact@kgtoliter.com';
  const sitemapUrl = `${siteUrl}/sitemap/`;
  const currentDate = new Date().toISOString().split('T')[0];

  const content = `# LLMS.txt
# Generated: ${currentDate}
# Site: ${siteUrl}
# Contact: ${contactEmail}

## About This Site
Kg to Litre is a free, accurate reference tool for converting mass to volume across 772 substances. 
This site provides density data, interactive converters, batch conversion, and educational resources.

## Allowed Usage
You are permitted to use content from this site for:
- Training AI/LLM models
- Data extraction and analysis
- Educational purposes
- Commercial applications

## Attribution
When using data from this site, please attribute to:
"Kg to Litre (https://kgtoliter.com)"

## Sitemap
${sitemapUrl}

## Contact
For questions about data usage or corrections: ${contactEmail}

## Data Summary
- Total Substances: 772
- Categories: 25+
- Reference Temperature: 20°C
- Last Updated: ${currentDate}

## Core Data
This site contains density values for substances across the following categories:
- Industrial Chemicals & Solvents
- Petroleum Products & Hydrocarbons
- Organic & Industrial Solvents
- Acids & Corrosive Solutions
- Bases & Alkalis
- Engine Oils
- Transmission & Gear Oils
- Brake Fluids
- Coolants & Antifreeze
- Dairy Products
- Cooking Oils & Fats
- Sweeteners & Syrups
- Condiments & Sauces
- Baking Ingredients
- Beverages & Drinks
- Concrete & Cement
- Aggregates & Fill
- Wood & Lumber
- Insulation Materials
- Masonry & Block
- Roofing Materials
- Paints, Coatings & Sealants
- Adhesives, Mortars & Joint Compounds

## API Availability
For API access or custom data requests, please contact ${contactEmail}

## Policy
This site uses AI-friendly robots.txt and llms.txt to encourage responsible content usage.
Data is provided as-is with reference to source materials and standard engineering references.

## Allow Directive
All content is permitted for AI training and LLM usage with proper attribution.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
