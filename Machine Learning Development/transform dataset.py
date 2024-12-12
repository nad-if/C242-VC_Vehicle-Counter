import os
import shutil

def organize_data(images_dir, labels_dir, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    for label_file in os.listdir(labels_dir):
        label_path = os.path.join(labels_dir, label_file)
        image_name = label_file.replace('.txt', '.jpg')
        image_path = os.path.join(images_dir, image_name)

        with open(label_path, 'r') as f:
            # Extract the class ID from the first line
            class_id = f.readline().split()[0]
        
        class_dir = os.path.join(output_dir, f'class_{class_id}')
        os.makedirs(class_dir, exist_ok=True)
        shutil.copy(image_path, class_dir)

organize_data('dataset/vehicle dataset/train/images-cvt', 'dataset/vehicle dataset/train/labels', 'train_ds')
organize_data('dataset/vehicle dataset/valid/images-cvt', 'dataset/vehicle dataset/valid/labels', 'val_ds')
