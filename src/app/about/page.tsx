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
      image: 'images/about/team.jpg',
    },
    {
      title: 'Misión',
      description:
        'Crear experiencias únicas e innovadoras en el mundo floral, mediante arreglos que transmiten emociones y resalten la belleza natural de nuestro país.',
      image: 'images/about/mission.jpg',
    },
    {
      title: 'Visión',
      description:
        'Ser conocidos como una floristería ejemplar e innovadora que combina la creatividad, la calidad y la delicadeza de las flores para satisfacer las necesidades del cliente.',
      image: 'images/about/vision.jpg',
    },
    {
      title: 'Valores',
      descriptionList: [
        'Amor',
        'Compañerismo',
        'Amistad',
        'Bondad',
        'Respeto',
        'Puntualidad'
      ],
      image: 'images/about/values.jpg',
    },
    {
      title: 'Información de Contacto',
      contactInfo: {
        address: 'Calle 3, Barrio Los Santos, Santiago de los Caballeros, Rep. Dom.',
        phone: '(829) 228-7796',
        email: 'togetherbebloom333@gmail.com',
      },
      image: 'images/about/map.jpg',
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
    <div className="container mx-auto p-4 max-w-screen-md">
      <h1 className="text-2xl font-semibold mb-4 text-center">Conócenos</h1>

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
                    <CardDescription>Dirección: {card.contactInfo.address}</CardDescription>
                    <CardDescription>Teléfono: {card.contactInfo.phone}</CardDescription>
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
