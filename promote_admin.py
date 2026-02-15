from dotenv import load_dotenv
load_dotenv()
from backend.database import SessionLocal
from backend.models import User, UserRole

db = SessionLocal()
user = db.query(User).filter(User.email == 'admin@vishwaguru.com').first()
if user:
    user.role = UserRole.ADMIN
    db.commit()
    print('User admin@vishwaguru.com promoted to ADMIN')
else:
    print('User not found')
db.close()
