import {Project} from "@/models/project";
import {NextRequest, NextResponse} from "next/server";
import noisetoolImage from '@/../public/noisetool.png';
import opentestingapiImage from '@/../public/opentestingapi.png';

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
    },
    {
      name: 'opentestingapi editor',
      description: 'A graphical Editor for Testcases written with OpenTestingAPI. The project was part of my final examination for my apprenticeship.',
      githubLink: 'https://github.com/opentestingapi/impl_editor.git',
      image: `${baseUrl}${opentestingapiImage.src}`,
    }
  ] satisfies Project[];

  return NextResponse.json(projects, { status: 200 });
}