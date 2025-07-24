import cloudinary from "@/lib/cloudinary";

export async function uploadToCloudinary(
  fileBuffer: Buffer,
  mimetype: string,
  folder: string = "Events"
) {
  const base64 = `data:${mimetype};base64,${fileBuffer.toString("base64")}`;

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
