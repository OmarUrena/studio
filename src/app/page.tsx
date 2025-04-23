'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import AboutPage from '@/app/about/page';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  description: string;
}

const productsData: Product[] = [
  { id: 1, name: 'Classic Roses Bouquet', price: 29.99, image: 'https://picsum.photos/id/237/300/200', type: 'Roses', description: 'A timeless bouquet of red roses, perfect for expressing love and passion.' },
  { id: 2, name: 'Tulip Delight', price: 24.99, image: 'https://picsum.photos/id/238/300/200', type: 'Tulips', description: 'A vibrant mix of colorful tulips that brings joy and freshness to any space.' },
  { id: 3, name: 'Sunflower Radiance', price: 19.99, image: 'https://picsum.photos/id/239/300/200', type: 'Sunflowers', description: 'Bright and cheerful sunflowers that capture the essence of summer.' },
  { id: 4, name: 'Orchid Elegance', price: 39.99, image: 'https://picsum.photos/id/240/300/200', type: 'Orchids', description: 'An elegant orchid arrangement that adds a touch of sophistication to any setting.' },
  { id: 5, name: 'Daisy Fresh Bunch', price: 14.99, image: 'https://picsum.photos/id/241/300/200', type: 'Daisies', description: 'A cheerful bunch of daisies that brings a breath of fresh air and simple beauty.' },
  { id: 6, name: 'Lily White Bouquet', price: 34.99, image: 'https://picsum.photos/id/242/300/200', type: 'Lilies', description: 'A stunning bouquet of white lilies, symbolizing purity and renewal.' },
  { id: 7, name: 'Mixed Spring Flowers', price: 27.99, image: 'https://picsum.photos/id/243/300/200', type: 'Mixed', description: 'A colorful mix of spring flowers that captures the beauty and vibrancy of the season.' },
  { id: 8, name: 'Carnation Classic', price: 17.99, image: 'https://picsum.photos/id/244/300/200', type: 'Carnations', description: 'A classic arrangement of carnations, known for their beauty and long-lasting freshness.' },
  { id: 9, name: 'Hydrangea Harmony', price: 31.99, image: 'https://picsum.photos/id/245/300/200', type: 'Hydrangeas', description: 'A harmonious arrangement of hydrangeas, known for their lush blooms and soft colors.' },
  { id: 10, name: 'Peony Perfection', price: 44.99, image: 'https://picsum.photos/id/246/300/200', type: 'Peonies', description: 'A perfect bouquet of peonies, symbolizing romance and prosperity.' },
];

export default function Home() {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [showCatalog, setShowCatalog] = useState(true);

  useEffect(() => {
    let filteredProducts = productsData.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === 'priceAsc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceDesc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setProducts([...filteredProducts]);
  }, [searchQuery, sortBy]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <img src="/images/logo.png" alt="Together We Bloom Logo" className="h-50 w-auto mb-4" />
      </div>{/* Add an onLoad event handler to the image to fade it in once it's loaded. The class 'opacity-100' should be added to the image element when it is loaded. */}

      <Button onClick={() => setShowCatalog(!showCatalog)} className="mb-4 rounded-full">
        {showCatalog ? 'Ir a la página de información' : 'Ir al catálogo'}
      </Button>

      {showCatalog ? (
        <>
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <Input
              type="text"
              placeholder="Buscar productos..."
              className="mb-2 md:mb-0 md:w-1/3 rounded-full bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Select onValueChange={setSortBy}>
              <SelectTrigger className="md:w-52 rounded-full bg-white">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priceAsc">Precio: Menor a Mayor</SelectItem>
                <SelectItem value="priceDesc">Precio: Mayor a Menor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator className="mb-4" />
          <ScrollArea className="h-[600px] w-full rounded-md border">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-md transition-opacity duration-300 opacity-0 animate-fade-in"
                    onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      (e.target as HTMLImageElement).classList.add('opacity-100');
                    }}
                  />
                  <CardContent>
                    <CardDescription>{product.description}</CardDescription>
                    <CardDescription>Tipo: {product.type}</CardDescription>
                    <CardDescription>Precio: ${product.price.toFixed(2)}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </>
      ) : (
        <AboutPage />
      )}
    </div>
  );
}
