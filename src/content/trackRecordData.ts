export interface TrackRecordProject {
  id: number;
  name: string;
  status: 'Sold' | 'Hold' | 'In-Progress';
  totalInvestment: string;
  sellingPrice: string;
  roi: string;
  image: string;
  isGroup?: boolean;
  groupCount?: number;
  groupTitle?: string;
}

const R2_BASE = 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/trackrecord';

export const trackRecordProjects: TrackRecordProject[] = [
  { id: 1, name: 'Flip 1', status: 'Sold', totalInvestment: 'AED 6,850,500', sellingPrice: 'AED 14,200,000', roi: '107%', image: `${R2_BASE}/Flip_01_Sold.jpg` },
  { id: 2, name: 'Flip 2', status: 'Sold', totalInvestment: 'AED 12,056,500', sellingPrice: 'AED 21,000,000', roi: '74%', image: `${R2_BASE}/Flip_02_Sold.jpg` },
  { id: 3, name: 'Flip 3', status: 'Sold', totalInvestment: 'AED 12,111,000', sellingPrice: 'AED 21,000,000', roi: '73%', image: `${R2_BASE}/Flip_03_Sold.jpg` },
  { id: 4, name: 'Flip 4', status: 'Hold', totalInvestment: 'AED 23,700,000', sellingPrice: 'AED 70,000,000', roi: '195%', image: `${R2_BASE}/Flip_04_Hold.jpg` },
  { id: 5, name: 'Flip 5', status: 'Hold', totalInvestment: 'AED 14,656,000', sellingPrice: 'AED 38,000,000', roi: '159%', image: `${R2_BASE}/Flip_05_Hold.jpg` },
  { id: 6, name: 'Flip 6', status: 'Hold', totalInvestment: 'AED 15,092,000', sellingPrice: 'AED 40,000,000', roi: '165%', image: `${R2_BASE}/Flip_06_Hold.jpg` },
  { id: 7, name: 'Flip 7', status: 'Sold', totalInvestment: 'AED 13,310,000', sellingPrice: 'AED 18,500,000', roi: '39%', image: `${R2_BASE}/Flip_07_Sold.jpg` },
  { id: 8, name: 'Flip 8', status: 'Sold', totalInvestment: 'AED 13,310,000', sellingPrice: 'AED 22,000,000', roi: '65%', image: `${R2_BASE}/Flip_08_Sold.jpg` },
  { id: 9, name: 'Flip 9', status: 'Sold', totalInvestment: 'AED 12,438,000', sellingPrice: 'AED 23,000,000', roi: '85%', image: `${R2_BASE}/Flip_09_Sold.jpg` },
  { id: 10, name: 'Flip 10', status: 'Sold', totalInvestment: 'AED 11,130,000', sellingPrice: 'AED 21,000,000', roi: '89%', image: `${R2_BASE}/Flip_10_Sold.jpg` },
  { id: 11, name: 'Flip 11', status: 'Sold', totalInvestment: 'AED 11,130,000', sellingPrice: 'AED 21,600,000', roi: '94%', image: `${R2_BASE}/Flip_11_Sold.jpg` },
  { id: 12, name: 'Flip 12', status: 'Sold', totalInvestment: 'AED 11,130,000', sellingPrice: 'AED 24,000,000', roi: '116%', image: `${R2_BASE}/Flip_12_Sold.jpg` },
  { id: 13, name: 'Flip 13', status: 'Sold', totalInvestment: 'AED 11,130,000', sellingPrice: 'AED 24,500,000', roi: '120%', image: `${R2_BASE}/Flip_13_Sold.jpg` },
  { id: 14, name: 'Flip 14', status: 'Sold', totalInvestment: 'AED 11,130,000', sellingPrice: 'AED 22,500,000', roi: '102%', image: `${R2_BASE}/Flip_14_Sold.jpg` },
  { id: 15, name: 'Flip 15', status: 'Sold', totalInvestment: 'AED 11,130,000', sellingPrice: 'AED 23,000,000', roi: '107%', image: `${R2_BASE}/Flip_15_Sold.jpg` },
  { id: 16, name: 'Flip 16', status: 'Sold', totalInvestment: 'AED 11,130,000', sellingPrice: 'AED 23,500,000', roi: '111%', image: `${R2_BASE}/Flip_16_Sold.jpg` },
  { id: 17, name: 'Flip 17', status: 'Sold', totalInvestment: 'AED 11,130,000', sellingPrice: 'AED 23,500,000', roi: '111%', image: `${R2_BASE}/Flip_17_Sold.jpg` },
  { id: 18, name: 'Flip 18', status: 'Sold', totalInvestment: 'AED 11,130,000', sellingPrice: 'AED 19,000,000', roi: '71%', image: `${R2_BASE}/Flip_18_Sold.jpg` },
  { id: 19, name: 'Flip 19', status: 'Sold', totalInvestment: 'AED 11,130,000', sellingPrice: 'AED 19,500,000', roi: '75%', image: `${R2_BASE}/Flip_19_Sold.jpg` },
  { id: 20, name: 'Flip 20', status: 'Sold', totalInvestment: 'AED 18,500,000', sellingPrice: 'AED 32,000,000', roi: '73%', image: `${R2_BASE}/Flip_20_Sold.jpg` },
  { id: 21, name: 'Flip 21', status: 'Sold', totalInvestment: 'AED 18,500,000', sellingPrice: 'AED 32,000,000', roi: '73%', image: `${R2_BASE}/Flip_21_Sold.jpg` },
  { id: 22, name: 'Flip 22', status: 'Sold', totalInvestment: 'AED 16,035,000', sellingPrice: 'AED 21,750,000', roi: '36%', image: `${R2_BASE}/Flip_22_Sold.jpg` },
  { id: 23, name: 'Flip 23', status: 'Hold', totalInvestment: 'AED 14,182,000', sellingPrice: 'AED 32,000,000', roi: '126%', image: `${R2_BASE}/Flip_23_Hold.jpg` },
  { id: 24, name: 'Flip 24', status: 'Sold', totalInvestment: 'AED 17,409,500', sellingPrice: 'AED 27,000,000', roi: '55%', image: `${R2_BASE}/Flip_24_Sold.jpg` },
  { id: 25, name: 'Flip 25', status: 'Sold', totalInvestment: 'AED 18,215,000', sellingPrice: 'AED 25,000,000', roi: '37%', image: `${R2_BASE}/Flip_25_Sold.jpg` },
  { id: 26, name: 'Flip 26', status: 'Sold', totalInvestment: 'AED 23,580,000', sellingPrice: 'AED 33,000,000', roi: '40%', image: `${R2_BASE}/Flip_26_Sold.jpg` },
  { id: 27, name: 'Flip 27', status: 'Sold', totalInvestment: 'AED 24,670,000', sellingPrice: 'AED 35,000,000', roi: '42%', image: `${R2_BASE}/Flip_27_Sold.jpg` },
  { id: 28, name: 'Flip 28', status: 'Sold', totalInvestment: 'AED 24,670,000', sellingPrice: 'AED 35,000,000', roi: '42%', image: `${R2_BASE}/Flip_28_Sold.jpg` },
  { id: 29, name: 'Flip 29', status: 'Sold', totalInvestment: 'AED 24,343,000', sellingPrice: 'AED 34,000,000', roi: '40%', image: `${R2_BASE}/Flip_29_Sold.jpg` },
  { id: 30, name: 'Flip 30', status: 'Sold', totalInvestment: 'AED 24,670,000', sellingPrice: 'AED 33,800,000', roi: '37%', image: `${R2_BASE}/Flip_30_Sold.jpg` },
  { id: 31, name: 'Flip 31', status: 'Sold', totalInvestment: 'AED 23,580,000', sellingPrice: 'AED 33,800,000', roi: '43%', image: `${R2_BASE}/Flip_31_Sold.jpg` },
  { id: 32, name: 'Flip 32', status: 'Sold', totalInvestment: 'AED 24,670,000', sellingPrice: 'AED 34,680,000', roi: '41%', image: `${R2_BASE}/Flip_32_Sold.jpg` },
  { id: 33, name: 'Flip 33', status: 'Sold', totalInvestment: 'AED 23,471,000', sellingPrice: 'AED 33,400,000', roi: '42%', image: `${R2_BASE}/Flip_33_Sold.jpg` },
  { id: 34, name: 'Flip 34', status: 'Sold', totalInvestment: 'AED 24,670,000', sellingPrice: 'AED 31,500,000', roi: '28%', image: `${R2_BASE}/Flip_34_Sold.jpg` },
  { id: 35, name: 'Flip 35', status: 'Sold', totalInvestment: 'AED 24,670,000', sellingPrice: 'AED 33,000,000', roi: '34%', image: `${R2_BASE}/Flip_35_Sold.jpg` },
  { id: 36, name: 'Flip 36', status: 'Sold', totalInvestment: 'AED 34,200,000', sellingPrice: 'AED 45,600,000', roi: '33%', image: `${R2_BASE}/Flip_36_Sold.jpg` },
  { 
    id: 37, 
    name: 'Flips 37-46', 
    status: 'In-Progress', 
    totalInvestment: '', 
    sellingPrice: '', 
    roi: '', 
    image: `${R2_BASE}/Flip_37_In-Progress.jpg`,
    isGroup: true,
    groupCount: 10,
    groupTitle: '10 Projects under renovation'
  },
];

export const getStatusColor = (status: TrackRecordProject['status']) => {
  switch (status) {
    case 'Sold':
      return { bg: 'bg-[#1DB976]', dot: 'bg-[#1DB976]', text: 'text-white' };
    case 'Hold':
      return { bg: 'bg-[#1DB976]', dot: 'bg-amber-500', text: 'text-white' };
    case 'In-Progress':
      return { bg: 'bg-blue-500', dot: 'bg-blue-500', text: 'text-white' };
  }
};
