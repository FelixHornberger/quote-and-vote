'use client'

import { generatePrompt } from '@/utils/prompt';
import { useConditionStore } from '@/zustand/condition';
import { useHrefStore } from '@/zustand/href';
import { usePartyStore } from '@/zustand/party';
import { useSystemPromptStore } from '@/zustand/systemPrompt';
import React, { useState } from 'react';
import Select, { OptionsOrGroups, OptionProps, StylesConfig } from 'react-select';

interface SelectorProps {
  options: OptionsOrGroups<any, any>;
  value: any;
  onChange: (value: any) => void;
  isMulti?: boolean;
  isSearchable?: boolean;
}

const Selector: React.FC<SelectorProps> = ({
  options,
  value,
  onChange,
}) => {
  const customStyles: StylesConfig<any, false, any> = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '0.375rem',
      borderColor: 'black',
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'black',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#3b82f6' : 'white',
      color: state.isSelected ? 'white' : '#374151',
      '&:hover': {
        backgroundColor: '#bfdbfe',
        color: '#1e293b',
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#bfdbfe',
      borderRadius: '0.375rem',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#1e293b',
      padding: '0.25rem 0.5rem',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#1e293b',
      '&:hover': {
        backgroundColor: '#bfdbfe',
        color: '#1e293b',
      },
    }),
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      styles={customStyles}
    />
  );
};

export default function PartySelector() {

  const {setParty} = usePartyStore();
  const {setSystemPrompt} = useSystemPromptStore();
  const {activeCondition} = useConditionStore();
  const {href} = useHrefStore()
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const options = [
    { value: 'Alliance of Liberals and Democrats for Europe Party (ALDE)', label: 'Alliance of Liberals and Democrats for Europe Party (ALDE)' },
    { value: 'The European Christian Political Movement (ECPM)', label: 'The European Christian Political Movement (ECPM)' },
    { value: 'European Conservatives and Reformists (ECR-Party)', label: 'European Conservatives and Reformists (ECR-Party)' },
    { value: 'European Democrats (EDP)', label: 'European Democrats (EDP)' },
    { value: 'European Free Alliance (EFA)', label: 'European Free Alliance (EFA)' },
    { value: 'European Greens (EGP)', label: 'European Greens (EGP)' },
    { value: 'European-LEFT (EL)', label: 'European-LEFT (EL)' },
    { value: 'European people\'s party (EPP)', label: 'European people\'s party (EPP)' },
    { value: 'The Party of European Socialists (PES)', label: 'The Party of European Socialists (PES)' },
    { value: 'European Pirate Party (PPEU)', label: 'European Pirate Party (PPEU)' },
    { value: 'Volt Europa (Volt)', label: 'Volt Europa (Volt)' },
  ];

  // TODO: When this gets changed to its own site smt like -> preStudyPage then this handle click needs to get moved to the button logic.
  // This function should defintly be moved to the button so the calls to the api get reduced to the bare minimum
  const handleClick = async (option: any) => {
    setSelectedOption(option);
    setParty(option.value)
    if (href !== '/pdf') {
        let system_introduction_message = await generatePrompt(option.value, activeCondition);
        setSystemPrompt (system_introduction_message);
    }
  }
          
  return (
    <div>
    <Selector
      options={options}
      value={selectedOption}
      onChange={handleClick}
    />
  </div>
  );
}