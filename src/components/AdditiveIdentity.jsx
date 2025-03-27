import React, { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Slider } from '../components/ui/slider';
import { Plus, Lightbulb } from 'lucide-react';

const AdditiveIdentity = () => {
  const [number, setNumber] = useState(5);

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <Card className="w-full max-w-2xl mx-auto shadow-md bg-white">
        <CardHeader className="bg-sky-100 text-sky-800">
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl font-bold">Additive Identity Property</CardTitle>
            <Plus size={40} className="text-sky-600" />
          </div>
          <CardDescription className="text-sky-700 text-lg">Explore and Understand the Additive Identity Property!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <Alert className="bg-blue-50 border-blue-100">
            <Lightbulb className="h-4 w-4 text-blue-400" />
            <AlertTitle className="text-blue-700">Additive Identity Property Basics</AlertTitle>
            <AlertDescription className="text-blue-600">
              <p>
                The additive identity property states that for any number, adding zero to it results in the same number. This property holds true for all real numbers, including positive, negative, and zero. In mathematical terms, for any number 'a': a + 0 = a.
              </p>
            </AlertDescription>
          </Alert>
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-6xl font-bold">
                {number} + 0 = {number}
              </p>
            </div>
            <div className="space-y-2">
              <label htmlFor="number-slider" className="block text-sm font-medium text-sky-700">
                Adjust the number:
              </label>
              <Slider
                id="number-slider"
                min={-10}
                max={10}
                step={1}
                value={[number]}
                onValueChange={(value) => setNumber(value[0])}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdditiveIdentity;