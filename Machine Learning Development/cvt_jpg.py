from PIL import Image
import os

def convert_images_to_jpg(input_dir, output_dir):
    """
    Converts all images in the input directory to JPG format and saves them in the output directory.
    
    Args:
        input_dir (str): Path to the folder containing images to convert.
        output_dir (str): Path to the folder where converted images will be saved.
    """
    # Ensure the output directory exists
    os.makedirs(output_dir, exist_ok=True)
    
    # Loop through all files in the input directory
    for filename in os.listdir(input_dir):
        # Build the full file path
        file_path = os.path.join(input_dir, filename)
        
        # Check if it's a file and try to open it as an image
        if os.path.isfile(file_path):
            try:
                # Open the image
                with Image.open(file_path) as img:
                    # Convert to RGB (some formats like PNG support transparency)
                    img = img.convert("RGB")
                    
                    # Build output filename
                    base_name = os.path.splitext(filename)[0]  # Get the file name without extension
                    output_file = os.path.join(output_dir, f"{base_name}.jpg")
                    
                    # Save the image in JPG format
                    img.save(output_file, "JPEG")
                    print(f"Converted {filename} to {output_file}")
            except Exception as e:
                print(f"Error converting {filename}: {e}")

# Example usage
input_directory = "dataset/vehicle dataset/valid/images"
output_directory = "dataset/vehicle dataset/valid/images-cvt"
convert_images_to_jpg(input_directory, output_directory)
