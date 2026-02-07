import sys
import os
from pathlib import Path

# Add project root to path
current_file = Path(__file__).resolve()
backend_dir = current_file.parent
repo_root = backend_dir.parent
sys.path.insert(0, str(repo_root))

from backend.database import engine, Base
from backend.models import *

def init_db():
    print("Creating tables...")
    Base.metadata.create_all(bind=engine)
    print("Tables created.")

if __name__ == "__main__":
    init_db()
