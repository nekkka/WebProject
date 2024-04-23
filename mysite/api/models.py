from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    image = models.ImageField(upload_to='product_images/')  
    images = models.JSONField() 
    rating = models.FloatField()
    category = models.ForeignKey(to='Category', on_delete=models.CASCADE)

    def __str__(self):
        return f'ID: {self.id}, Name: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'image': self.image.url,  
            'images': self.images,
            'rating': self.rating,
            'category': self.category.name 
        }   

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
