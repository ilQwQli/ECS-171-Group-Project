import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, OneHotEncoder

mushroom_data = pd.read_csv("dataset.csv")

encoders = {}

for column_name in mushroom_data.columns:
    encoders[column_name] = LabelEncoder()

for column_name in mushroom_data.columns:
    mushroom_data[column_name] = encoders[column_name].fit_transform(mushroom_data[column_name])

y = mushroom_data['class']
X = mushroom_data.drop('class', axis=1)
scaler = StandardScaler()

X = pd.DataFrame(scaler.fit_transform(X), columns=X.columns)

X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=0.8)

log_model = LogisticRegression()

log_model.fit(X_train, y_train)


# The datasets and functions should be created here and the backend will start calling the functions once they are ready
def evaluate_model(inputs):
    dataframe_source = {}
    for column_name in X_train.columns:
        dataframe_source[column_name] = encoders[column_name].transform([inputs[column_name]])

    input_df = pd.DataFrame.from_dict(dataframe_source)

    result = log_model.predict(input_df)
    print(result)
    return result[0]
