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
          body: JSON.stringify({ party_name: party }),
        });

        if (response.ok) {
          const pdfBlob = await response.blob();
          const pdfUrl = URL.createObjectURL(pdfBlob);
          setPdfData(pdfUrl);
        } else {
          console.error('Error fetching PDF:', response.status);
        }
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPDF();
  }, [party]);

  return (
    <>
      {pdfData ? (
        <object data={pdfData} type="application/pdf" className='w-full sm:px-5 h-[90%]'>
          <p>Your browser doesn&apos;t support embedded PDFs. Please download the PDF to view it:</p>
          <a href={pdfData} target="_blank" rel="noopener noreferrer">
            Download PDF
          </a>
        </object>
      ) : (
        <p>Loading PDF...</p>
      )}
    </>
  );
};

export default ManifestoComponent;