import {Project} from "@/models/project";
import {NextResponse} from "next/server";
import noisetoolImage from '@/../public/noisetool.png';
import {StaticImageData} from 'next/image';

const baseUrl = 'http://localhost:3001';

export async function GET() {
  const projects = [
    {
      name: 'noisetool.',
      description: 'A WebApp to enhance you focus by replacing you background noises with generated noise.',
      githubLink: 'https://github.com/stuchlyf/noisetool..git',
      link: 'https://noisetool.stuchlyf.dev',
      image: `${baseUrl}${noisetoolImage.src}`,
      // image: noisetoolImage
      // image: ''
    }
  ] satisfies Project[];

  return NextResponse.json(projects, { status: 200 });
}