import pyodbc
from dotenv import load_dotenv
import os

load_dotenv()

def get_connection():
    conn = pyodbc.connect(
        f"DRIVER={{{os.getenv('DB_DRIVER')}}};"
        f"SERVER={os.getenv('DB_SERVER')};"
        f"DATABASE={os.getenv('DB_NAME')};"
        "Trusted_Connection=yes;"
    )
    return conn