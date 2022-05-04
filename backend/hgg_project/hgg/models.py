from django.db import models

# Create your models here.
class Post(models.Model):
    P_ID = models.BigAutoField(primary_key=True, verbose_name="게시글 아이디")
    M_ID = models.ForeignKey(Member, on_delete=models.CASCADE)
    P_TITLE = models.CharField(max_length=20, verbose_name="게시글 제목")
    P_CONTENT = models.TextField(verbose_name="게시글 내용")
    P_FILE_1 = models.ImageField(upload_to="item_pics")
    P_FILE_2 = models.ImageField(upload_to="item_pics", blank=True)
    P_FILE_3 = models.ImageField(upload_to="image_pics", blank=True)
    P_CDATE = models.DateTimeField(auto_now_add=True, verbose_name="상품등록일")
    P_UDATE = models.DateTimeField(auto_now=True, verbose_name="상품수정일")
    P_CNT = models.IntegerField(verbose_name="조회수")
    P_STATUS = models.BooleanField(default=False, verbose_name="공구진행상태")
    P_NAME = models.CharField(max_length=50, verbose_name="상품이름")
    P_PRICE = models.IntegerField(verbose_name="상품가격")
    P_QUANTITY = models.IntegerField(verbose_name="상품주문 달성량")
    P_DDATE = models.DateField(verbose_name="상품마감일")

    def __str__(self):
        return self.P_TITLE
