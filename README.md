**Welcome to Feelings Forward, where you can always find something to do regardless of how you're feeling! You can train this app to recognize different facial expressions/emotions and choose different activities based on the expression you give. Feelings Forward uses a pre-trained model that extracts features of an image and re-trains with new data. Have fun!**

Created by Stacey Zander.

![background](/1.png)
![background](/2.png)
![background](/3.png)


**Demo:**

https://youtu.be/yCC6g9syFMk

**Stack:**

Ruby/Rails
Postgresql
JavaScript

**API:**

https://p5js.org/
https://ml5js.org/ - Feature Extractor 


**Install Instructions:**

1. Have current versions of Ruby, Rails, and Lite-Server installed.

2. Install Ruby gems by running the command 'bundle install'.

3. Run the command 'rails db:create' and 'rails db:migrate' to set up your database.

4. Run the command 'rails db:seed' to fill the database with existing activities.

5. Open your terminal and navigate into the emotionsApp directory within the backend directory. Run the command 'rails s'.

6. Open a separate terminal window and navigate into the frontend folder. Run the command 'lite-server'.

7. Go to http://localhost:3001/, allow the app to use the camera on your computer, and click on the "Train your own model" button.

8. Make your best impression of each expression, and click the corresponding button. It's best to train each expression at least 20 times or so.

9. Press "Train" and wait for the training to complete. You will immediately see the text below the image changing based on your expressions.

10. Try all of your expressions and if you are happy with the training, press the "Save" button.

11. You will have two files sent to your downloads folder: model.json and model.weights.bin. Move both of these to your frontend folder (replacing any others), and restart your lite-server.

12. You can now show the model how you are feeling, and choose your favorite activities based each emotion! Enjoy!
