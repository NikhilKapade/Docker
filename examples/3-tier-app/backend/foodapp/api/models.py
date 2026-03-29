from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    image = models.URLField()

    def __str__(self):
        return self.name


class Order(models.Model):
    food = models.ForeignKey(Food, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)