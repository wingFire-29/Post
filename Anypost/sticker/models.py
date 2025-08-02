from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class sticker(models.Model):
    CATEGORY_CHOICES = [
        ('TECH', 'Technical Issue'),
        ('LOGIN', 'Login or Access Problem'),
        ('SFTWR', 'Software Request'),
        ('HDWR', 'Hardware Request'),
        ('OTHER', 'Other / General Inquiry'),
    ]
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    subject = models.CharField(max_length=100)
    description=models.TextField(max_length=300)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES, default='OTHER')
    photo=models.ImageField(upload_to='photos/',
    blank=True,null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

def _str_(self):
    return f'{self.user.username}-{self.text}'

    