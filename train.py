import  tensorflow as tf 
import  matplotlib.pyplot as plt 
import  os
import  numpy as np
from    tensorflow.keras.preprocessing.image import ImageDataGenerator
from    tensorflow.keras.preprocessing import image
import  matplotlib.image as mpimg
from    PIL import ImageOps, Image, ImageDraw, ImageFont
from sklearn.metrics import classification_report, confusion_matrix
import seaborn as sns





train = ImageDataGenerator(rescale = 1/255)
validation = ImageDataGenerator(rescale = 1/255)
batch_size = 32
epochs = 7


train_dataset = train.flow_from_directory(
    r'C:\Users\Admin\Desktop\dataset\train',
    target_size =(200,200),
    batch_size=batch_size,
    class_mode ='categorical'
)
validation_dataset = validation.flow_from_directory(
    r'C:\Users\Admin\Desktop\dataset\validation',
    target_size =(200,200),
    batch_size=batch_size,
    class_mode ='categorical',
    shuffle=False
)

num_of_test_samples = validation_dataset.samples
num_of_train_samples = train_dataset.samples


model = tf.keras.models.Sequential([
    #
    tf.keras.layers.Conv2D(16,(3,3),activation = 'relu' , input_shape = (200,200,3)),
    tf.keras.layers.MaxPool2D(2,2),
    #
    tf.keras.layers.Conv2D(32,(3,3),activation = 'relu'),
    tf.keras.layers.MaxPool2D(2,2),
    #
    tf.keras.layers.Conv2D(64,(3,3),activation = 'relu'),
    tf.keras.layers.MaxPool2D(2,2),
    ##
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(512,activation = 'relu'),
    tf.keras.layers.Dense(7,activation='softmax')
])

model.compile(
    loss = 'categorical_crossentropy',
    optimizer = tf.keras.optimizers.RMSprop(lr=0.001),
    metrics = ['accuracy']
)

model.fit(
    train_dataset,
    steps_per_epoch=num_of_train_samples // batch_size,
    epochs=epochs,
    validation_data=validation_dataset,
    validation_steps=num_of_test_samples // batch_size)

model.save('Phuketfood')

Y_pred = model.predict_generator(validation_dataset, num_of_test_samples // batch_size+1)
y_pred = np.argmax(Y_pred, axis=1)
true_classes = validation_dataset.classes
class_labels = list(validation_dataset.class_indices.keys())  

cf_matrix = confusion_matrix(true_classes, y_pred)
sns.heatmap(cf_matrix, annot=True, cmap='Blues', linewidths=1,xticklabels=class_labels,yticklabels=class_labels)

plt.ylabel('True label')
plt.xlabel('Predicted label')
plt.title(' CNN \n')
plt.show()

