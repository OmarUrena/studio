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
}

const productsData: Product[] = [
  { id: 1, name: 'Classic Roses Bouquet', price: 29.99, image: 'https://picsum.photos/id/237/300/200', type: 'Roses' },
  { id: 2, name: 'Tulip Delight', price: 24.99, image: 'https://picsum.photos/id/238/300/200', type: 'Tulips' },
  { id: 3, name: 'Sunflower Radiance', price: 19.99, image: 'https://picsum.photos/id/239/300/200', type: 'Sunflowers' },
  { id: 4, name: 'Orchid Elegance', price: 39.99, image: 'https://picsum.photos/id/240/300/200', type: 'Orchids' },
  { id: 5, name: 'Daisy Fresh Bunch', price: 14.99, image: 'https://picsum.photos/id/241/300/200', type: 'Daisies' },
  { id: 6, name: 'Lily White Bouquet', price: 34.99, image: 'https://picsum.photos/id/242/300/200', type: 'Lilies' },
  { id: 7, name: 'Mixed Spring Flowers', price: 27.99, image: 'https://picsum.photos/id/243/300/200', type: 'Mixed' },
  { id: 8, name: 'Carnation Classic', price: 17.99, image: 'https://picsum.photos/id/244/300/200', type: 'Carnations' },
  { id: 9, name: 'Hydrangea Harmony', price: 31.99, image: 'https://picsum.photos/id/245/300/200', type: 'Hydrangeas' },
  { id: 10, name: 'Peony Perfection', price: 44.99, image: 'https://picsum.photos/id/246/300/200', type: 'Peonies' },
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
      <h1 className="text-2xl font-semibold mb-4 text-center">Together We Bloom</h1>

      <Button onClick={() => setShowCatalog(!showCatalog)} className="mb-4 rounded-full">
        {showCatalog ? 'Go to About Page' : 'Go to Catalog'}
      </Button>

      {showCatalog ? (
        <>
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <Input
              type="text"
              placeholder="Search products..."
              className="mb-2 md:mb-0 md:w-1/3 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Select onValueChange={setSortBy}>
              <SelectTrigger className="md:w-52 rounded-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                <SelectItem value="priceDesc">Price: High to Low</SelectItem>
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
                    <CardDescription>Type: {product.type}</CardDescription>
                    <CardDescription>Price: ${product.price.toFixed(2)}</CardDescription>
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
