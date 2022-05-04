from dataclasses import field
from django import forms
from .models import Post

class PostCreateForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = [
            'P_TITLE',
            'P_CONTENT',
            'P_FILE_1',
            'P_FILE_2',
            'P_FILE_3',
            'P_NAME',
            'P_PRICE',
            'P_QUANTITY',
            'P_DDATE',
        ]

class PostUpdateForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = [
            'P_TITLE',
            'P_CONTENT',
            'P_FILE_1',
            'P_FILE_2',
            'P_FILE_3',
            'P_NAME',
            'P_PRICE',
            'P_QUANTITY',
            'P_DDATE',
            'P_STATUS',
        ]