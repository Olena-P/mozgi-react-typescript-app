import React from 'react';
import What from '../../pages/What';
import Where from '../../pages/Where';
import Who from '../../pages/Who';

type navigationConfigType={
    name: string;
    Component: React.FC;
}[];

export const navigationConfig: navigationConfigType =[
    {name: 'what', Component: What,},
    {name: 'who', Component: Who,},
    {name: 'where', Component: Where,},
]