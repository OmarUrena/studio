
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">About Bloom Boutique</h1>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Why Choose Us?</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            We are dedicated to providing the freshest, most beautiful flowers for every occasion. Our expert florists hand-pick each bloom to ensure quality and longevity.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            To brighten lives through the beauty of flowers, creating memorable moments and lasting impressions.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Our Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            To be the leading flower provider, recognized for our quality, creativity, and commitment to customer satisfaction.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Our Values</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Quality: We source only the finest flowers.</li>
            <li>Creativity: We offer unique and innovative floral designs.</li>
            <li>Customer Satisfaction: We are dedicated to exceeding customer expectations.</li>
            <li>Sustainability: We are committed to eco-friendly practices.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Address: 123 Flower Street, Cityville, State
            <br />
            Phone: (555) 123-4567
            <br />
            Email: info@bloomboutique.com
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
