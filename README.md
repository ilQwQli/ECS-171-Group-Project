# ECS 171 Project
The research group project for ECS 171.  
This repository contains the scratch work (Jupyter Notebooks) and final model integrated into the backend.  
It also includes a user-friendly web UI to run the model from and view the results.

## How to set up
Assuming you have [Python](https://www.python.org/downloads/) and [NodeJS](https://nodejs.org/en/download) installed.

1. Clone this repository
2. Navigate to the `web` folder (`cd web`)
3. (Optional, but recommended) Activate a virtual environment (`python -m venv venv` or similar followed by `source ./venv/bin/activate` or similar)
4. Install Python libraries with `pip install -r requirements.txt`
5. Run backend with `python -m flask run`
6. Open a new terminal in the `web` folder
7. Navigate to the `frontend` folder
8. Install Node packages with `npm install`
9. Adjust settings in `src/Constants.js` to the URL to the backend server (The line to swap out is commented out)
10. Run `npm run dev` to start the frontend
11. Go to the URL the console prints out matching `http://localhost:` followed by the port number

That is all you need to run the backend and frontend in development mode!  
For production, `npm run build` needs to be run to convert the page to a static site in `web/frontend/dist` and served through a web server like Nginx while the backend needs to be configured to stay running and reverse-proxied to with Nginx or by changing the port with administrator permissions.


## Using the model
Once you have the site running, go to the frontend page.  
You will see a list of inputs to provide the model.
1. Open each dropdown and select the option that most closely resembles the mushroom on hand
2. Press `Process Inputs` to send your inputs to the backend model
3. View the results on the right of the inputs with a graphic showing either a normal or poisonous mushroom.
4. Change your inputs and try again as many times as you would like to!

## About the Notebook
Data analysis and initial models were completed in the `notebooks/mushrooms.ipynb` Jupyter Notebook.  
To view, install Jupyter Lab and its dependencies using any method and open it.  
The notebook should already have all the results of running its cell contents available for viewing but you may rerun the code by wiping all cells and rerunning the code for the entire file.
