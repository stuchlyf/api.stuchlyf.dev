import {z} from "zod";

const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  githubLink: z.string().url().optional(),
  link: z.string().url().optional(),
  image: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

export default projectSchema;