import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemaTypes';
import {deskStructure} from './sanity.structure';

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.PUBLIC_SANITY_PROJECT_ID ||
  'vz99cd3t';

const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.PUBLIC_SANITY_DATASET ||
  'production';

export default defineConfig({
  name: 'default',
  title: 'BEL Hotel Studio',
  projectId,
  dataset,
  plugins: [structureTool({structure: deskStructure}), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
