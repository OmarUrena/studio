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
  {
    id: 1, 
    name: 'Caja Amor Eterno',
    price: 2000.00,
    image: '/images/catalog/1.jpg',
    type: 'Rosas en caja',
    description: 'Rosas rojas en caja elegante con chocolates Ferrero y una tarjeta personalizada.'
  },
  {
    id: 2,
    name: 'Ramo Dulce Encanto',
    price: 1000.00,
    image: '/images/catalog/2.jpg',
    type: 'Ramos mixtos',
    description: 'Ramo de girasoles y margaritas, envuelto en papel kraft, acompañado de una mini caja de chocolates.'
  },
  {
    id: 3,
    name: 'Taza Floral de Buenos Días',
    price: 300.00,
    image: '/images/catalog/3.jpg',
    type: 'Detalles florales',
    description: 'Taza personalizada con mensaje y arreglo de flores pequeñas dentro.'
  },
  {
    id: 4,
    name: 'Peluchito con Rosas',
    price: 1500.00,
    image: '/images/catalog/4.jpg',
    type: 'Rosas y peluches',
    description: 'Peluche mediano acompañado de 6 rosas rojas envueltas con lazo decorativo.'
  },
  {
    id: 5,
    name: 'Caja Tropical',
    price: 2500.00,
    image: '/images/catalog/5.jpg',
    type: 'Arreglos exóticos',
    description: 'Arreglo en caja con flores exóticas como heliconias, aves del paraíso y lirios.'
  },
  {
    id: 6,
    name: 'Bouquet "Te pienso"',
    price: 700.00,
    image: '/images/catalog/6.jpg',
    type: 'Ramos románticos',
    description: 'Ramo romántico con rosas rosadas, paniculata y eucalipto, con sobre perfumado.'
  },
  {
    id: 7,
    name: 'Combo Enamorado',
    price: 2500.00,
    image: '/images/catalog/7.jpg',
    type: 'Combos de regalo',
    description: 'Arreglo mixto con globo, chocolates y peluche pequeño, ideal para enamorados.'
  },
  {
    id: 8,
    name: 'Caja "Gracias por tanto"',
    price: 1800.00,
    image: '/images/catalog/8.jpg',
    type: 'Cajas de agradecimiento',
    description: 'Flores mixtas en tonos pastel en caja decorativa con tarjeta de agradecimiento.'
  },
  {
    id: 9,
    name: 'Mini Bouquet para Detalle',
    price: 500.00,
    image: '/images/catalog/9.jpg',
    type: 'Mini ramos',
    description: 'Pequeño ramo con 3 flores a elegir, papel decorativo y sticker temático.'
  },
  {
    id: 10,
    name: 'Arreglo en Canasta Rústica',
    price: 1300.00,
    image: '/images/catalog/10.jpg',
    type: 'Canastas florales',
    description: 'Canasta con flores silvestres, lavanda y follaje, ideal para decorar.'
  },
  {
    id: 11,
    name: 'Ramo de Tulipanes Premium',
    price: 1500.00,
    image: '/images/catalog/11.jpg',
    type: 'Tulipanes',
    description: 'Tulipanes de colores en envoltura elegante con lazo satinado.'
  },
  {
    id: 12,
    name: 'Caja "Feliz Cumpleaños"',
    price: 1700.00,
    image: '/images/catalog/12.jpg',
    type: 'Cumpleaños',
    description: 'Caja decorativa con rosas, chocolates, globo y mini botella de vino o jugo gourmet.'
  },
  {
    id: 13,
    name: 'Florero Primaveral',
    price: 2500.00,
    image: '/images/catalog/13.jpg',
    type: 'Arreglos en florero',
    description: 'Arreglo variado en florero de vidrio, ideal para regalar a domicilio.'
  },
  {
    id: 14,
    name: 'Kit "Relájate con Flores"',
    price: 800.00,
    image: '/images/catalog/14.jpg',
    type: 'Regalos de bienestar',
    description: 'Mini ramo, vela aromática, bolsita de té y tarjeta con frase relajante.'
  },
  {
    id: 15,
    name: 'Centro de Mesa Elegante',
    price: 2000.00,
    image: '/images/catalog/15.jpg',
    type: 'Centros de mesa',
    description: 'Arreglo plano en base baja con rosas, lirios y follaje, ideal para eventos.'
  },
  {
    id: 16,
    name: 'Arreglo para Baby Shower',
    price: 2800.00,
    image: '/images/catalog/16.jpg',
    type: 'Arreglo de bebe',
    description: 'Arreglo con peluche, globo de felicitaciones, flores blancas.'
  },
  {
    id: 17,
    name: 'Corona fúnebre',
    price: 5000.00,
    image: '/images/catalog/17.jpg',
    type: 'Arreglo fúnebre',
    description: 'Corona fúnebre con rosas y margaritas rojo vino, lirios y tulipanes.'
  }
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
                  <CardHeader className="h-16 mb-3">
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-md"
                    onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      (e.target as HTMLImageElement).classList.add('opacity-100');
                    }}
                  />
                  <CardContent className="h-40">
                    <CardDescription className="h-24 overflow-hidden">{product.description}</CardDescription>
                    <CardDescription>Tipo: {product.type}</CardDescription>
                    <CardDescription>Precio: <strong>${product.price.toFixed(2)}</strong></CardDescription>
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

