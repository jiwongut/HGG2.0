from logging import logMultiprocessing
from django.shortcuts import render
from django.urls import reverse
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from .models import Post
from .functions import confirmation_required_redirect
from .forms import PostCreateForm, PostUpdateForm

from allauth.account.models import EmailAddress
from braces.views import LoginRequiredMixin, UserPassesTestMixin
# Create your views here.
class IndexView(ListView):
    model = Post
    template_name = "hgg/index.html"
    context_object_name = "posts" #post datas aliasing to 'posts'
    paginate_by = 8

    def get_queryset(self):
        return Post.objects.filter(is_sold=False).order_by("-P_UDATE")

class PostDetailView(LoginRequiredMixin, DetailView):
    model = Post
    template_name = "hgg/post_detail.html"
    pk_url_kwarg = "post_id"

class PostCreateView(logMultiprocessing, UserPassesTestMixin, CreateView):
    model = Post
    template_name = "hgg/post_form.html"
    form_class = PostCreateForm
    redirect_unauthenticated_users = True
    raise_exception = confirmation_required_redirect

    def get_success_url(self):
        return reverse('post-detail', kwargs = {'post_id' : self.object.P_ID})
    
    def form_valid(self, form):
        form.instance.author = self.request.user #add author in form
        return super().form_valid(form)
    
    def test_func(self, user):
        return EmailAddress.objects.filter(user = user, verified=True)

class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    template_name = "hgg/post_form.html"
    form_class = PostUpdateForm
    pk_url_kwarg = "post_id"

    def get_success_url(self):
        return reverse('post-detail', kwargs={"post_id": self.object.P_ID})
    
    def test_func(self, user):
        post = self.get_object()
        return post.M_ID == user

class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    template_name = "hgg/post_confirm_delete.html"
    pk_url_kwarg = "post_id"

    def get_success_url(self):
        return reverse("index")
    
    def test_func(self, user):
        post = self.get_object()
        return post.M_ID == user
