import cloudinary from "@/lib/cloudinary";

export async function uploadToCloudinary(
  file: File,
  folder: string = "Events"
) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

  const result = await cloudinary.uploader.upload(base64, {
    folder: `Sudden_Sparks_Events/${folder}`,
    resource_type: "auto",
    quality: "auto",
    fetch_format: "auto",
    flags: "attachment",
    transformation: [
      { width: 800, height: 800, crop: "fill" },
      { quality: "auto" },
      { fetch_format: "auto" },
    ],
  });

  return {
    url: result.secure_url,
    public_id: result.public_id,
  };
}
