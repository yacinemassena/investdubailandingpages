export type TrackRecordProject = {
  id: string;
  name: string;
  status: 'Completed' | 'In-Progress';
  totalInvestment: string;
  sellingPrice: string;
  roi: string;
  image: string;
};

export const trackRecordProjects: TrackRecordProject[] = [
  { id: '1', name: 'Palm Jumeirah Villa', status: 'Completed', totalInvestment: 'AED 24,670,000', sellingPrice: 'AED 34,680,000', roi: '41%', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: '2', name: 'Jumeirah Islands Estate', status: 'Completed', totalInvestment: 'AED 23,580,000', sellingPrice: 'AED 33,800,000', roi: '43%', image: 'https://images.unsplash.com/photo-1600607687931-cebf0046cb5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: '3', name: 'Al Barari Mansion', status: 'Completed', totalInvestment: 'AED 24,670,000', sellingPrice: 'AED 33,800,000', roi: '37%', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: '4', name: 'Emirates Hills Villa', status: 'Completed', totalInvestment: 'AED 24,343,000', sellingPrice: 'AED 34,000,000', roi: '40%', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: '5', name: 'Dubai Hills Estate', status: 'Completed', totalInvestment: 'AED 24,670,000', sellingPrice: 'AED 35,000,000', roi: '42%', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: '6', name: 'District One Mansion', status: 'Completed', totalInvestment: 'AED 24,670,000', sellingPrice: 'AED 35,000,000', roi: '42%', image: 'https://images.unsplash.com/photo-1600585154526-990dced4ea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: '7', name: 'Jumeirah Golf Estates', status: 'Completed', totalInvestment: 'AED 23,580,000', sellingPrice: 'AED 33,000,000', roi: '40%', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: '8', name: 'The Meadows Villa', status: 'Completed', totalInvestment: 'AED 18,215,000', sellingPrice: 'AED 25,000,000', roi: '37%', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: '9', name: 'Palm Jumeirah Signature', status: 'In-Progress', totalInvestment: 'AED 30,000,000', sellingPrice: '-', roi: '-', image: 'https://images.unsplash.com/photo-1600607687931-cebf0046cb5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed': return { bg: 'bg-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-500' };
    case 'In-Progress': return { bg: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-500' };
    default: return { bg: 'bg-gray-100', text: 'text-gray-700', dot: 'bg-gray-500' };
  }
};
