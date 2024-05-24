import { NextRequest, NextResponse } from 'next/server';

type ResponseData = {
  href: string;
  condition: boolean;
};

export const GET = async (req: NextRequest) => {
  const randomNumber = Math.floor(Math.random() * 3);

  let data: ResponseData;

  if (randomNumber === 0) {
    data = {
      href: '/pdf',
      condition: false,
    };
  } else if (randomNumber === 1) {
    data = {
      href: '/chat',
      condition: false,
    };
  } else {
    data = {
      href: '/chat',
      condition: true,
    };
  }

  return NextResponse.json(data);
};

export const runtime = 'edge';