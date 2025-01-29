export function sanityImageUrl(imageRef: string, width = 800, height = 600) {
  const projectId = import.meta.env.SANITY_PROJECT_ID;
  const dataset = import.meta.env.SANITY_DATASET;

  if (!imageRef) return "";

  // Extract only the core image ID (remove "image-" prefix)
  const parts = imageRef.split("-");
  if (parts.length < 3) return ""; // Ensure the ref is valid

  const imageId = `${parts[1]}-${parts[2]}.${parts[3]}`; // Extract id and format

  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}?w=${width}&h=${height}`;
}
