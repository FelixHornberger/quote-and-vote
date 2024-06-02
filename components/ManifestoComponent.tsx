'use client'

import { usePartyStore } from '@/zustand/party';
import React, { useState, useEffect } from 'react';

const ManifestoComponent = () => {

  const [pdfData, setPdfData] = useState<string | null>(null);

  const {party} = usePartyStore();

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await fetch('/api/getPDFs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ party }),
        });
  
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Error fetching PDF: ${errorMessage}`);
        }
  
        const data = await response.text();
        setPdfData(new URL(data, window.location.href).href);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };
    fetchPDF();
  }, [party]);


  return (
    <>
      {pdfData ? (
        <embed
          src={pdfData}
          className="w-full sm:w-[95%] h-[80%]"
          title="PDF Viewer"
        />
      ) : (
        <p>Loading PDF...</p>
      )}
    </>
  );
};


export default ManifestoComponent;