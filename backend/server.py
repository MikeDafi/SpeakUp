from flask import Flask, request
import requests

app = Flask(__name__)

def performNearbySearch(longitude,latitude,keyword):
    url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={longitude}%2C{latitude}&radius=1500&keyword={keyword}&key=AIzaSyASQaR0JZRhuQyW6MJunD_FYDBbUdaqAOs"

    payload={}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload)

    return response.text

def performClosestNUsers(n,user):
    import psycopg2
    import sys
    import boto3
    import os

    ENDPOINT="postgresmydb.123456789012.us-east-1.rds.amazonaws.com"
    PORT="5432"
    USER="jane_doe"
    REGION="us-east-1"
    DBNAME="mydb"

    #gets the credentials from .aws/credentials
    session = boto3.Session(profile_name='RDSCreds')
    client = session.client('rds')

    token = client.generate_db_auth_token(DBHostname=ENDPOINT, Port=PORT, DBUsername=USER, Region=REGION)

    try:
        conn = psycopg2.connect(host=ENDPOINT, port=PORT, database=DBNAME, user=USER, password=token, sslrootcert="SSLCERTIFICATE")
        cur = conn.cursor()
        cur.execute("""SELECT now()""")
        query_results = cur.fetchall()
        print(query_results)
    except Exception as e:
        print("Database connection failed due to {}".format(e))   

@app.route("/")
def hello_world():
    json = performNearbySearch("-33.8670522","151.1957362","restaurant")
    return f"<p>{json}</p>"

if __name__ == '__main__':
   from waitress import serve
   serve(app, host="0.0.0.0", port=8080)