# AnyPost help Desk

A Django-based issue tracking system that allows users to submit and track technical issues, software requests, and other inquiries.

## Project Structure

```
Anypost/
├── Anypost/                 # Project configuration folder
│   ├── __init__.py
│   ├── settings.py         # Project settings
│   ├── urls.py            # Main URL configuration
│   └── wsgi.py            # WSGI configuration
├── sticker/               # Main application
│   ├── migrations/        # Database migrations
│   ├── static/           # Static files (CSS, JS, images)
│   │   ├── css/
│   │   └── js/
│   ├── templates/        # Application templates
│   │   └── registration/
│   ├── __init__.py
│   ├── admin.py         # Admin configuration
│   ├── apps.py         # App configuration
│   ├── models.py       # Database models
│   ├── urls.py        # App URL configuration
│   └── views.py       # View functions
├── templates/         # Project-wide templates
│   ├── layout.html   # Base template
│   └── dashboard.html # Dashboard template
├── media/           # User-uploaded files
├── staticfiles/     # Collected static files
├── manage.py        # Django management script
└── requirements.txt # Project dependencies
```

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd Anypost
```

2. Create a virtual environment:
```bash
python -m venv .venv
.venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Configure the database:
```bash
python manage.py makemigrations
python manage.py migrate
```

5. Create a superuser:
```bash
python manage.py createsuperuser
```

6. Collect static files:
```bash
python manage.py collectstatic
```

7. Run the development server:
```bash
python manage.py runserver
```

## Features

- User Authentication (Login/Signup)
- Issue Submission with categories:
  - Technical Issues
  - Login/Access Problems
  - Software Requests
  - Hardware Requests
  - General Inquiries
- File attachment support
- Admin dashboard for issue management
- User dashboard for tracking submitted issues

## Technologies Used

- Django 5.2
- Python 3.13
- SQLite Database
- Bootstrap 5.3
- HTML/CSS/JavaScript

## Access Points

- Main site: http://127.0.0.1:8000/
- Admin panel: http://127.0.0.1:8000/admin/
- Dashboard: http://127.0.0.1:8000/dashboard/

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any queries or support, please contact:
[Your Contact Information]
