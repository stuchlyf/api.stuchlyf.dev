import {Project} from "@/models/project";
import {NextRequest, NextResponse} from "next/server";
import noisetoolImage from '@/../public/noisetool.png';

export async function GET(request: NextRequest) {
  const {protocol, host} = new URL(request.url);
  const baseUrl = `${protocol}//${host}`;

  const projects = [
    {
      name: 'noisetool.',
      description: 'A WebApp to enhance you focus by replacing you background noises with generated noise.',
      githubLink: 'https://github.com/stuchlyf/noisetool..git',
      link: 'https://noisetool.stuchlyf.dev',
      image: `${baseUrl}${noisetoolImage.src}`,
    }
  ] satisfies Project[];

  return NextResponse.json(projects, { status: 200 });
}