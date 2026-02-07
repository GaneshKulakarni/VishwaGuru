import sys
import os
from pathlib import Path

# Add project root to path
current_file = Path(__file__).resolve()
backend_dir = current_file.parent
repo_root = backend_dir.parent
sys.path.insert(0, str(repo_root))

from sqlalchemy.orm import Session
from backend.database import SessionLocal
from backend.models import User, UserRole
from backend.utils import get_password_hash

def create_admin_user(email, password, full_name="Admin User"):
    db: Session = SessionLocal()
    try:
        user = db.query(User).filter(User.email == email).first()
        if user:
            print(f"User {email} already exists.")
            return

        hashed_password = get_password_hash(password)
        new_user = User(
            email=email,
            hashed_password=hashed_password,
            full_name=full_name,
            role=UserRole.ADMIN,
            is_active=True
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        print(f"Admin user {email} created successfully.")
    except Exception as e:
        db.rollback()
        print(f"Error creating admin user: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python init_admin.py <email> [password] [full_name]")
        sys.exit(1)
    
    import getpass

    email = sys.argv[1]
    password = os.getenv("ADMIN_PASSWORD")
    
    # Try to get password from args if not in env
    if not password and len(sys.argv) > 2:
        password = sys.argv[2]
        print("Warning: Passing password via command line argument is insecure.")

    # Interactive fallback
    if not password:
        password = getpass.getpass("Enter admin password: ")

    # Resolve full_name
    full_name_index = 3 if len(sys.argv) > 2 and sys.argv[2] == password else 2
    if len(sys.argv) > full_name_index:
         full_name = sys.argv[full_name_index]
    else:
         full_name = input("Enter full name (default: Admin User): ") or "Admin User"
    
    create_admin_user(email, password, full_name)
