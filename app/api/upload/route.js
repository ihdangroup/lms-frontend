import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path/posix";

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");
  if (!file) {
    return NextResponse.json({ success: false });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const path = join(process.cwd(), "/public/images", file.name);
  await writeFile(path, buffer);
  console;
  console.log(`open ${path} to see the uploaded file`);
  return NextResponse.json({ success: true });
}
