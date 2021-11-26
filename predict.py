import  tensorflow as tf 
from tensorflow.keras.models import load_model
import  tensorflow as tf 
import  matplotlib.pyplot as plt 
from    cv2 import cv2
import  os
import  numpy as np
from    tensorflow.keras.preprocessing.image import ImageDataGenerator
from    tensorflow.keras.preprocessing import image
import  matplotlib.image as mpimg
from    PIL import ImageOps, Image, ImageDraw, ImageFont



validation = ImageDataGenerator(rescale = 1/255)

validation_dataset = validation.flow_from_directory(
    r'C:\Users\Admin\Desktop\dataset\validation',
    target_size =(200,200),
    class_mode ='categorical',
    shuffle=False
)
class_labels = list(validation_dataset.class_indices.keys())  

new_model = load_model(r'C:\Users\Admin\Desktop\dataset\Phuketfood')

img = image.load_img(r'C:\Users\Admin\Desktop\dataset\test\5.jpg',target_size=(200,200))

x = image.img_to_array(img)
x = np.expand_dims(x,axis = 0)
images = np.vstack([x])
val = new_model.predict(images)

index = np.argmax(val)
print(index)


print(class_labels)



