'use client';

import React from 'react';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {motion} from 'framer-motion';

const AboutPage = () => {
  const cardData = [
    {
      title: 'Sobre nosotros',
      description:
        'Somos una floristería donde ofrecemos flores frescas, plantas y detalles decorativos para todo tipo de ocasiones, brindando belleza y emoción a través del lenguaje de las flores.',
      image: 'https://picsum.photos/id/300/600/400',
    },
    {
      title: 'Our Mission',
      description:
        'To brighten lives through the beauty of flowers, creating memorable moments and lasting impressions.',
      image: 'https://picsum.photos/id/301/600/400',
    },
    {
      title: 'Our Vision',
      description:
        'To be the leading flower provider, recognized for our quality, creativity, and commitment to customer satisfaction.',
      image: 'https://picsum.photos/id/302/600/400',
    },
    {
      title: 'Our Values',
      descriptionList: [
        'Quality: We source only the finest flowers.',
        'Creativity: We offer unique and innovative floral designs.',
        'Customer Satisfaction: We are dedicated to exceeding customer expectations.',
        'Sustainability: We are committed to eco-friendly practices.',
      ],
      image: 'https://picsum.photos/id/303/600/400',
    },
    {
      title: 'Contact Information',
      contactInfo: {
        address: '123 Flower Street, Cityville, State',
        phone: '(555) 123-4567',
        email: 'info@bloomboutique.com',
      },
      image: 'https://picsum.photos/id/304/600/400',
    },
  ];

  const cardVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">About Bloom Boutique</h1>

      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="mb-8"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
        >
          <Card className="flex flex-col items-center md:flex-row rounded-lg overflow-hidden shadow-md">
            {card.image && index % 2 === 0 && (
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover md:w-1/2"
              />
            )}
            <div className="w-full md:w-1/2">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-md">
                {card.description ? (
                  <CardDescription>{card.description}</CardDescription>
                ) : card.descriptionList ? (
                  <ul>
                    {card.descriptionList.map((item, i) => (
                      <li key={i} className="list-disc ml-5">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : card.contactInfo ? (
                  <div>
                    <CardDescription>Address: {card.contactInfo.address}</CardDescription>
                    <CardDescription>Phone: {card.contactInfo.phone}</CardDescription>
                    <CardDescription>Email: {card.contactInfo.email}</CardDescription>
                  </div>
                ) : null}
              </CardContent>
            </div>
            {card.image && index % 2 !== 0 && (
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover md:w-1/2"
              />
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutPage;
