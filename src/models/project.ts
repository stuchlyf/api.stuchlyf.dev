import {z} from "zod";

const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  githubLink: z.string().url(),
  link: z.string().url(),
  image: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

export default projectSchema;