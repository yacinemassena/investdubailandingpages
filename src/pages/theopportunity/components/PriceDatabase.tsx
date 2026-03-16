import { useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';
import Logo from '../../../assets/logo.svg';

const neighborhoodCategories = [
  {
    category: 'Ultra-Luxury Villas',
    description: 'Exclusive villa communities with premium amenities',
    neighborhoods: [
      { id: 'palm-jumeirah', name: 'Palm Jumeirah', active: true, description: 'Iconic man-made island with beachfront villas' },
      { id: 'emirates-hills', name: 'Emirates Hills', active: false, description: 'Dubai\'s Beverly Hills with golf course views' },
      { id: 'jumeirah-islands', name: 'Jumeirah Islands', active: true, description: 'Gated community with 46 islands and lakes' },
      { id: 'al-barari', name: 'Al Barari', active: true, description: 'Botanical luxury living with lush greenery' },
      { id: 'arabian-ranches', name: 'Arabian Ranches', active: true, description: 'Desert-themed golf community' },
      { id: 'dubai-hills-estate', name: 'Dubai Hills Estate', active: true, description: 'Modern master-planned community' },
    ]
  },
  {
    category: 'Premium Apartments',
    description: 'High-rise luxury living in prime locations',
    neighborhoods: [
      { id: 'downtown-dubai', name: 'Downtown Dubai', active: true, description: 'Home to Burj Khalifa and Dubai Mall' },
      { id: 'dubai-marina', name: 'Dubai Marina', active: true, description: 'Waterfront living with marina views' },
      { id: 'business-bay', name: 'Business Bay', active: true, description: 'Central business district with canal views' },
      { id: 'jbr', name: 'Jumeirah Beach Residence (JBR)', active: true, description: 'Beachfront towers with resort lifestyle' },
      { id: 'city-walk', name: 'City Walk', active: true, description: 'Urban living with retail and dining' },
    ]
  },
  {
    category: 'Family Communities',
    description: 'Established neighborhoods perfect for families',
    neighborhoods: [
      { id: 'springs', name: 'The Springs', active: true, description: 'Lakeside villas with community parks' },
      { id: 'meadows', name: 'The Meadows', active: true, description: 'Spacious villas with landscaped gardens' },
      { id: 'victory-heights', name: 'Victory Heights', active: false, description: 'Sports-themed community' },
      { id: 'jumeirah-park', name: 'Jumeirah Park', active: true, description: 'Green community with parks' },
      { id: 'mira', name: 'Mira', active: false, description: 'Modern townhouses and villas' },
    ]
  },
  {
    category: 'Emerging Areas',
    description: 'High-growth neighborhoods with strong appreciation potential',
    neighborhoods: [
      { id: 'damac-hills', name: 'DAMAC Hills', active: true, description: 'Golf community with Trump International' },
      { id: 'dubai-south', name: 'Dubai South', active: true, description: 'Near Expo 2020 and Al Maktoum Airport' },
      { id: 'tilal-al-ghaf', name: 'Tilal Al Ghaf', active: false, description: 'Lagoon community by Majid Al Futtaim' },
      { id: 'town-square', name: 'Town Square', active: false, description: 'Affordable family community' },
    ]
  }
];

// Flatten for search and selection
const neighborhoods = neighborhoodCategories.flatMap(cat => 
  cat.neighborhoods.map(n => ({ ...n, category: cat.category }))
);

// JBR market data (TRANSFERRED SALES - AED per sqft)
const jbrData = [
  { quarter: 'Q3-2020', price: 1053 },
  { quarter: 'Q4-2020', price: 1200 },
  { quarter: 'Q1-2021', price: 1433 },
  { quarter: 'Q2-2021', price: 1486 },
  { quarter: 'Q3-2021', price: 1610 },
  { quarter: 'Q4-2021', price: 2408 },
  { quarter: 'Q1-2022', price: 3137 },
  { quarter: 'Q2-2022', price: 2084 },
  { quarter: 'Q3-2022', price: 1968 },
  { quarter: 'Q4-2022', price: 1941 },
  { quarter: 'Q1-2023', price: 2190 },
  { quarter: 'Q2-2023', price: 1957 },
  { quarter: 'Q3-2023', price: 1793 },
  { quarter: 'Q4-2023', price: 1859 },
  { quarter: 'Q1-2024', price: 2091 },
  { quarter: 'Q2-2024', price: 2243 },
  { quarter: 'Q3-2024', price: 2025 },
  { quarter: 'Q4-2024', price: 2253 },
  { quarter: 'Q1-2025', price: 2169 },
  { quarter: 'Q2-2025', price: 2305 },
  { quarter: 'Q3-2025', price: 2342 },
  { quarter: 'Q4-2025', price: 1919 },
];

// City Walk market data (TRANSFERRED SALES - AED per sqft)
const cityWalkData = [
  { quarter: 'Q3-2020', price: 1413 },
  { quarter: 'Q4-2020', price: 1484 },
  { quarter: 'Q1-2021', price: 1529 },
  { quarter: 'Q2-2021', price: 1557 },
  { quarter: 'Q3-2021', price: 1590 },
  { quarter: 'Q4-2021', price: 1646 },
  { quarter: 'Q1-2022', price: 1801 },
  { quarter: 'Q2-2022', price: 1850 },
  { quarter: 'Q3-2022', price: 2002 },
  { quarter: 'Q4-2022', price: 2156 },
  { quarter: 'Q1-2023', price: 2216 },
  { quarter: 'Q2-2023', price: 2195 },
  { quarter: 'Q3-2023', price: 2551 },
  { quarter: 'Q4-2023', price: 2369 },
  { quarter: 'Q1-2024', price: 2854 },
  { quarter: 'Q2-2024', price: 2639 },
  { quarter: 'Q3-2024', price: 3020 },
  { quarter: 'Q4-2024', price: 2647 },
  { quarter: 'Q1-2025', price: 2806 },
  { quarter: 'Q2-2025', price: 3076 },
  { quarter: 'Q3-2025', price: 3007 },
  { quarter: 'Q4-2025', price: 3256 },
];

// DAMAC Hills market data (TRANSFERRED SALES - AED per sqft)
const damacHillsData = [
  { quarter: 'Q3-2020', price: 935 },
  { quarter: 'Q4-2020', price: 913 },
  { quarter: 'Q1-2021', price: 963 },
  { quarter: 'Q2-2021', price: 1066 },
  { quarter: 'Q3-2021', price: 1042 },
  { quarter: 'Q4-2021', price: 1105 },
  { quarter: 'Q1-2022', price: 1060 },
  { quarter: 'Q2-2022', price: 1063 },
  { quarter: 'Q3-2022', price: 1121 },
  { quarter: 'Q4-2022', price: 1138 },
  { quarter: 'Q1-2023', price: 1167 },
  { quarter: 'Q2-2023', price: 1138 },
  { quarter: 'Q3-2023', price: 1226 },
  { quarter: 'Q4-2023', price: 1417 },
  { quarter: 'Q1-2024', price: 1498 },
  { quarter: 'Q2-2024', price: 1463 },
  { quarter: 'Q3-2024', price: 1523 },
  { quarter: 'Q4-2024', price: 1473 },
  { quarter: 'Q1-2025', price: 1525 },
  { quarter: 'Q2-2025', price: 1408 },
  { quarter: 'Q3-2025', price: 1559 },
  { quarter: 'Q4-2025', price: 1655 },
];

// Dubai Hills Estate market data (TRANSFERRED SALES - AED per sqft)
const dubaiHillsEstateData = [
  { quarter: 'Q3-2020', price: 1114 },
  { quarter: 'Q4-2020', price: 1215 },
  { quarter: 'Q1-2021', price: 1229 },
  { quarter: 'Q2-2021', price: 1344 },
  { quarter: 'Q3-2021', price: 1466 },
  { quarter: 'Q4-2021', price: 1479 },
  { quarter: 'Q1-2022', price: 1493 },
  { quarter: 'Q2-2022', price: 1514 },
  { quarter: 'Q3-2022', price: 1684 },
  { quarter: 'Q4-2022', price: 1733 },
  { quarter: 'Q1-2023', price: 1867 },
  { quarter: 'Q2-2023', price: 1936 },
  { quarter: 'Q3-2023', price: 1937 },
  { quarter: 'Q4-2023', price: 2088 },
  { quarter: 'Q1-2024', price: 2233 },
  { quarter: 'Q2-2024', price: 2210 },
  { quarter: 'Q3-2024', price: 2363 },
  { quarter: 'Q4-2024', price: 2357 },
  { quarter: 'Q1-2025', price: 2365 },
  { quarter: 'Q2-2025', price: 2384 },
  { quarter: 'Q3-2025', price: 2447 },
  { quarter: 'Q4-2025', price: 2351 },
];

// The Meadows market data (TRANSFERRED SALES - AED per sqft)
const meadowsData = [
  { quarter: 'Q3-2020', price: 934 },
  { quarter: 'Q4-2020', price: 1014 },
  { quarter: 'Q1-2021', price: 1076 },
  { quarter: 'Q2-2021', price: 1219 },
  { quarter: 'Q3-2021', price: 1323 },
  { quarter: 'Q4-2021', price: 1319 },
  { quarter: 'Q1-2022', price: 1493 },
  { quarter: 'Q2-2022', price: 1551 },
  { quarter: 'Q3-2022', price: 1600 },
  { quarter: 'Q4-2022', price: 1665 },
  { quarter: 'Q1-2023', price: 1682 },
  { quarter: 'Q2-2023', price: 1850 },
  { quarter: 'Q3-2023', price: 2000 },
  { quarter: 'Q4-2023', price: 2140 },
  { quarter: 'Q1-2024', price: 2117 },
  { quarter: 'Q2-2024', price: 2154 },
  { quarter: 'Q3-2024', price: 2342 },
  { quarter: 'Q4-2024', price: 2372 },
  { quarter: 'Q1-2025', price: 2753 },
  { quarter: 'Q2-2025', price: 2957 },
  { quarter: 'Q3-2025', price: 2881 },
  { quarter: 'Q4-2025', price: 3145 },
];

// The Springs market data (TRANSFERRED SALES - AED per sqft)
const springsData = [
  { quarter: 'Q3-2020', price: 728 },
  { quarter: 'Q4-2020', price: 788 },
  { quarter: 'Q1-2021', price: 850 },
  { quarter: 'Q2-2021', price: 920 },
  { quarter: 'Q3-2021', price: 1000 },
  { quarter: 'Q4-2021', price: 1080 },
  { quarter: 'Q1-2022', price: 1150 },
  { quarter: 'Q2-2022', price: 1200 },
  { quarter: 'Q3-2022', price: 1240 },
  { quarter: 'Q4-2022', price: 1260 },
  { quarter: 'Q1-2023', price: 1274 },
  { quarter: 'Q2-2023', price: 1350 },
  { quarter: 'Q3-2023', price: 1440 },
  { quarter: 'Q4-2023', price: 1533 },
  { quarter: 'Q1-2024', price: 1620 },
  { quarter: 'Q2-2024', price: 1686 },
  { quarter: 'Q3-2024', price: 1821 },
  { quarter: 'Q4-2024', price: 1883 },
  { quarter: 'Q1-2025', price: 2001 },
  { quarter: 'Q2-2025', price: 2109 },
  { quarter: 'Q3-2025', price: 2107 },
  { quarter: 'Q4-2025', price: 2139 },
];

// Dubai South market data (TRANSFERRED SALES - AED per sqft)
const dubaiSouthData = [
  { quarter: 'Q3-2020', price: 623 },
  { quarter: 'Q4-2020', price: 666 },
  { quarter: 'Q1-2021', price: 561 },
  { quarter: 'Q2-2021', price: 628 },
  { quarter: 'Q3-2021', price: 653 },
  { quarter: 'Q4-2021', price: 697 },
  { quarter: 'Q1-2022', price: 641 },
  { quarter: 'Q2-2022', price: 604 },
  { quarter: 'Q3-2022', price: 678 },
  { quarter: 'Q4-2022', price: 740 },
  { quarter: 'Q1-2023', price: 814 },
  { quarter: 'Q2-2023', price: 768 },
  { quarter: 'Q3-2023', price: 1095 },
  { quarter: 'Q4-2023', price: 1101 },
  { quarter: 'Q1-2024', price: 1296 },
  { quarter: 'Q2-2024', price: 1222 },
  { quarter: 'Q3-2024', price: 1301 },
  { quarter: 'Q4-2024', price: 1465 },
  { quarter: 'Q1-2025', price: 1705 },
  { quarter: 'Q2-2025', price: 1641 },
  { quarter: 'Q3-2025', price: 1466 },
  { quarter: 'Q4-2025', price: 1416 },
];

// Jumeirah Park market data (TRANSFERRED SALES - AED per sqft)
const jumeirahParkData = [
  { quarter: 'Q3-2020', price: 760 },
  { quarter: 'Q4-2020', price: 767 },
  { quarter: 'Q1-2021', price: 789 },
  { quarter: 'Q2-2021', price: 851 },
  { quarter: 'Q3-2021', price: 1006 },
  { quarter: 'Q4-2021', price: 1042 },
  { quarter: 'Q1-2022', price: 1035 },
  { quarter: 'Q2-2022', price: 996 },
  { quarter: 'Q3-2022', price: 1182 },
  { quarter: 'Q4-2022', price: 1099 },
  { quarter: 'Q1-2023', price: 1187 },
  { quarter: 'Q2-2023', price: 1221 },
  { quarter: 'Q3-2023', price: 1373 },
  { quarter: 'Q4-2023', price: 1515 },
  { quarter: 'Q1-2024', price: 1575 },
  { quarter: 'Q2-2024', price: 1873 },
  { quarter: 'Q3-2024', price: 1954 },
  { quarter: 'Q4-2024', price: 1717 },
  { quarter: 'Q1-2025', price: 1921 },
  { quarter: 'Q2-2025', price: 2056 },
  { quarter: 'Q3-2025', price: 2159 },
  { quarter: 'Q4-2025', price: 2058 },
];

// Palm Jumeirah market data (TRANSFERRED SALES - AED per sqft)
const palmJumeirahData = [
  { quarter: 'Q3-2020', price: 1466 },
  { quarter: 'Q4-2020', price: 1483 },
  { quarter: 'Q1-2021', price: 1603 },
  { quarter: 'Q2-2021', price: 1793 },
  { quarter: 'Q3-2021', price: 2330 },
  { quarter: 'Q4-2021', price: 2479 },
  { quarter: 'Q1-2022', price: 2258 },
  { quarter: 'Q2-2022', price: 2446 },
  { quarter: 'Q3-2022', price: 2602 },
  { quarter: 'Q4-2022', price: 3110 },
  { quarter: 'Q1-2023', price: 2596 },
  { quarter: 'Q2-2023', price: 2735 },
  { quarter: 'Q3-2023', price: 2908 },
  { quarter: 'Q4-2023', price: 2895 },
  { quarter: 'Q1-2024', price: 2827 },
  { quarter: 'Q2-2024', price: 2724 },
  { quarter: 'Q3-2024', price: 2761 },
  { quarter: 'Q4-2024', price: 2799 },
  { quarter: 'Q1-2025', price: 2863 },
  { quarter: 'Q2-2025', price: 3002 },
  { quarter: 'Q3-2025', price: 3486 },
  { quarter: 'Q4-2025', price: 3750 },
];

// Arabian Ranches market data (TRANSFERRED SALES - AED per sqft)
const arabianRanchesData = [
  { quarter: 'Q3-2020', price: 788 },
  { quarter: 'Q4-2020', price: 807 },
  { quarter: 'Q1-2021', price: 888 },
  { quarter: 'Q2-2021', price: 998 },
  { quarter: 'Q3-2021', price: 1094 },
  { quarter: 'Q4-2021', price: 1181 },
  { quarter: 'Q1-2022', price: 1198 },
  { quarter: 'Q2-2022', price: 1257 },
  { quarter: 'Q3-2022', price: 1229 },
  { quarter: 'Q4-2022', price: 1267 },
  { quarter: 'Q1-2023', price: 1395 },
  { quarter: 'Q2-2023', price: 1423 },
  { quarter: 'Q3-2023', price: 1460 },
  { quarter: 'Q4-2023', price: 1610 },
  { quarter: 'Q1-2024', price: 1746 },
  { quarter: 'Q2-2024', price: 1708 },
  { quarter: 'Q3-2024', price: 1914 },
  { quarter: 'Q4-2024', price: 1922 },
  { quarter: 'Q1-2025', price: 2108 },
  { quarter: 'Q2-2025', price: 2163 },
  { quarter: 'Q3-2025', price: 2261 },
  { quarter: 'Q4-2025', price: 2283 },
];

// Business Bay market data (TRANSFERRED SALES - AED per sqft)
const businessBayData = [
  { quarter: 'Q3-2020', price: 1282 },
  { quarter: 'Q4-2020', price: 1323 },
  { quarter: 'Q1-2021', price: 1284 },
  { quarter: 'Q2-2021', price: 1338 },
  { quarter: 'Q3-2021', price: 1546 },
  { quarter: 'Q4-2021', price: 1449 },
  { quarter: 'Q1-2022', price: 1581 },
  { quarter: 'Q2-2022', price: 1615 },
  { quarter: 'Q3-2022', price: 1768 },
  { quarter: 'Q4-2022', price: 1946 },
  { quarter: 'Q1-2023', price: 1985 },
  { quarter: 'Q2-2023', price: 1776 },
  { quarter: 'Q3-2023', price: 2295 },
  { quarter: 'Q4-2023', price: 2093 },
  { quarter: 'Q1-2024', price: 2222 },
  { quarter: 'Q2-2024', price: 2419 },
  { quarter: 'Q3-2024', price: 2383 },
  { quarter: 'Q4-2024', price: 2308 },
  { quarter: 'Q1-2025', price: 2353 },
  { quarter: 'Q2-2025', price: 2316 },
  { quarter: 'Q3-2025', price: 2587 },
  { quarter: 'Q4-2025', price: 2431 },
];

// Dubai Marina market data (TRANSFERRED SALES - AED per sqft)
const dubaiMarinaData = [
  { quarter: 'Q3-2020', price: 1137 },
  { quarter: 'Q4-2020', price: 1158 },
  { quarter: 'Q1-2021', price: 1197 },
  { quarter: 'Q2-2021', price: 1340 },
  { quarter: 'Q3-2021', price: 1382 },
  { quarter: 'Q4-2021', price: 1391 },
  { quarter: 'Q1-2022', price: 1406 },
  { quarter: 'Q2-2022', price: 1469 },
  { quarter: 'Q3-2022', price: 1581 },
  { quarter: 'Q4-2022', price: 1824 },
  { quarter: 'Q1-2023', price: 1717 },
  { quarter: 'Q2-2023', price: 1656 },
  { quarter: 'Q3-2023', price: 1641 },
  { quarter: 'Q4-2023', price: 1653 },
  { quarter: 'Q1-2024', price: 1848 },
  { quarter: 'Q2-2024', price: 1935 },
  { quarter: 'Q3-2024', price: 1865 },
  { quarter: 'Q4-2024', price: 2037 },
  { quarter: 'Q1-2025', price: 2404 },
  { quarter: 'Q2-2025', price: 2509 },
  { quarter: 'Q3-2025', price: 2287 },
  { quarter: 'Q4-2025', price: 2246 },
];

// Al Barari market data (TRANSFERRED SALES - AED per sqft)
const alBarariData = [
  { quarter: 'Q3-2020', price: 663 },
  { quarter: 'Q4-2020', price: 991 },
  { quarter: 'Q1-2021', price: 889 },
  { quarter: 'Q2-2021', price: 1001 },
  { quarter: 'Q3-2021', price: 1155 },
  { quarter: 'Q4-2021', price: 1069 },
  { quarter: 'Q1-2022', price: 1054 },
  { quarter: 'Q2-2022', price: 1265 },
  { quarter: 'Q3-2022', price: 1426 },
  { quarter: 'Q4-2022', price: 1182 },
  { quarter: 'Q1-2023', price: 1282 },
  { quarter: 'Q2-2023', price: 1496 },
  { quarter: 'Q3-2023', price: 1461 },
  { quarter: 'Q4-2023', price: 1013 },
  { quarter: 'Q1-2024', price: 1316 },
  { quarter: 'Q2-2024', price: 1731 },
  { quarter: 'Q3-2024', price: 1659 },
  { quarter: 'Q4-2024', price: 1764 },
  { quarter: 'Q1-2025', price: 1732 },
  { quarter: 'Q2-2025', price: 1658 },
  { quarter: 'Q3-2025', price: 1467 },
  { quarter: 'Q4-2025', price: 2041 },
];

// Downtown Dubai market data from chart.csv (TRANSFERRED SALES - AED per sqft)
const downtownDubaiData = [
  { quarter: 'Q3-2020', price: 1735 },
  { quarter: 'Q4-2020', price: 1826 },
  { quarter: 'Q1-2021', price: 1688 },
  { quarter: 'Q2-2021', price: 1900 },
  { quarter: 'Q3-2021', price: 1929 },
  { quarter: 'Q4-2021', price: 2159 },
  { quarter: 'Q1-2022', price: 2130 },
  { quarter: 'Q2-2022', price: 2253 },
  { quarter: 'Q3-2022', price: 2240 },
  { quarter: 'Q4-2022', price: 2232 },
  { quarter: 'Q1-2023', price: 2384 },
  { quarter: 'Q2-2023', price: 2294 },
  { quarter: 'Q3-2023', price: 2415 },
  { quarter: 'Q4-2023', price: 2607 },
  { quarter: 'Q1-2024', price: 2602 },
  { quarter: 'Q2-2024', price: 2682 },
  { quarter: 'Q3-2024', price: 2819 },
  { quarter: 'Q4-2024', price: 2707 },
  { quarter: 'Q1-2025', price: 2754 },
  { quarter: 'Q2-2025', price: 2767 },
  { quarter: 'Q3-2025', price: 2823 },
  { quarter: 'Q4-2025', price: 3570 },
];

// Jumeirah Islands market data from Ji marketoverview.csv
const jumeirahIslandsData = [
  { quarter: 'Q3-2020', price: 8684 },
  { quarter: 'Q4-2020', price: 10540 },
  { quarter: 'Q1-2021', price: 11971 },
  { quarter: 'Q2-2021', price: 13142 },
  { quarter: 'Q3-2021', price: 14302 },
  { quarter: 'Q4-2021', price: 14675 },
  { quarter: 'Q1-2022', price: 16142 },
  { quarter: 'Q2-2022', price: 17889 },
  { quarter: 'Q3-2022', price: 17585 },
  { quarter: 'Q4-2022', price: 16286 },
  { quarter: 'Q1-2023', price: 18922 },
  { quarter: 'Q2-2023', price: 24779 },
  { quarter: 'Q3-2023', price: 27072 },
  { quarter: 'Q4-2023', price: 31974 },
  { quarter: 'Q1-2024', price: 22210 },
  { quarter: 'Q2-2024', price: 29155 },
  { quarter: 'Q3-2024', price: 28475 },
  { quarter: 'Q4-2024', price: 33480 },
  { quarter: 'Q1-2025', price: 29974 },
  { quarter: 'Q2-2025', price: 31273 },
  { quarter: 'Q3-2025', price: 31782 },
  { quarter: 'Q4-2025', price: 38237 },
];

// Map neighborhood IDs to their data
const neighborhoodPriceData: Record<string, { quarter: string; price: number }[]> = {
  'downtown-dubai': downtownDubaiData,
  'jumeirah-islands': jumeirahIslandsData,
  'business-bay': businessBayData,
  'dubai-marina': dubaiMarinaData,
  'al-barari': alBarariData,
  'palm-jumeirah': palmJumeirahData,
  'arabian-ranches': arabianRanchesData,
  'dubai-hills-estate': dubaiHillsEstateData,
  'meadows': meadowsData,
  'springs': springsData,
  'dubai-south': dubaiSouthData,
  'jumeirah-park': jumeirahParkData,
  'jbr': jbrData,
  'city-walk': cityWalkData,
  'damac-hills': damacHillsData,
};

// Helper to get price metrics
const getPriceMetrics = (data: { quarter: string; price: number }[]) => {
  const latest = data[data.length - 1];
  const first = data[0];
  const yearAgo = data[data.length - 5];
  const peak = data.reduce((max, d) => d.price > max.price ? d : max, data[0]);
  
  const growthPercent = ((latest.price - first.price) / first.price * 100).toFixed(0);
  const yoyPercent = yearAgo ? ((latest.price - yearAgo.price) / yearAgo.price * 100).toFixed(1) : null;
  
  // Calculate min/max for chart scaling
  const minPrice = Math.min(...data.map(d => d.price));
  const maxPrice = Math.max(...data.map(d => d.price));
  const padding = (maxPrice - minPrice) * 0.1;
  const chartMin = Math.floor((minPrice - padding) / 100) * 100;
  const chartMax = Math.ceil((maxPrice + padding) / 100) * 100;
  
  return { latest, first, peak, growthPercent, yoyPercent, chartMin, chartMax };
};

export const PriceDatabase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNeighborhood, setActiveNeighborhood] = useState('jumeirah-islands');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const selectedNeighborhood = neighborhoods.find(n => n.id === activeNeighborhood);
  
  // Filter neighborhoods based on search and category
  const filteredNeighborhoods = neighborhoods.filter(n => {
    const matchesSearch = n.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !activeCategory || n.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Dubai Real Estate Price Database | Villa & Apartment Prices by Neighborhood | InvestDubai</title>
        <meta name="description" content="Comprehensive Dubai real estate price database. Track villa and apartment prices across 25+ neighborhoods including Palm Jumeirah, Emirates Hills, Dubai Marina, and more. Historical data and market trends." />
        <meta name="keywords" content="Dubai real estate prices, villa prices Dubai, apartment prices Dubai, Palm Jumeirah prices, Emirates Hills prices, Dubai property market, real estate investment Dubai" />
        <link rel="canonical" href="https://investdubai.com/price-database" />
      </head>
      
      <div className="min-h-screen bg-[#0A0A0A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={Logo} alt="InvestDubai" className="h-6 brightness-0 invert" />
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="/theopportunity" className="hover:text-white transition-colors">The Opportunity</a>
            <a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="/investopedia" className="hover:text-white transition-colors">Investopedia</a>
            <a href="/price-database" className="text-white border-b-2 border-white pb-1">Price Database</a>
            <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Log In
            </a>
            <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="bg-brand-accent text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Wave Pattern */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1DB976" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#1DB976" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1DB976" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {[...Array(20)].map((_, i) => (
              <path
                key={i}
                d={`M0,${150 + i * 8} Q300,${120 + i * 8 + Math.sin(i) * 20} 600,${150 + i * 8} T1200,${150 + i * 8}`}
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="1"
                opacity={0.3 + (i / 40)}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Price Database
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            InvestDubai has created the most comprehensive database to understand villa prices and appreciation rates by neighborhood
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for a neighborhood"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-full px-6 py-4 pl-6 pr-14 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent/50 transition-colors"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                !activeCategory
                  ? 'bg-brand-accent text-white'
                  : 'bg-transparent border border-white/20 text-gray-300 hover:border-white/40 hover:text-white'
              }`}
            >
              All Areas
            </button>
            {neighborhoodCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.category
                    ? 'bg-brand-accent text-white'
                    : 'bg-transparent border border-white/20 text-gray-300 hover:border-white/40 hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
          
          {/* Neighborhood Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filteredNeighborhoods.map((neighborhood) => (
              <button
                key={neighborhood.id}
                onClick={() => setActiveNeighborhood(neighborhood.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeNeighborhood === neighborhood.id
                    ? 'bg-white text-black'
                    : 'bg-transparent border border-white/20 text-gray-300 hover:border-white/40 hover:text-white'
                }`}
              >
                {neighborhood.name}
              </button>
            ))}
          </div>
          
          {filteredNeighborhoods.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No neighborhoods found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Selected Neighborhood Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {selectedNeighborhood?.name}
          </h2>
          
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent text-sm font-bold rounded-full border border-brand-accent/20 mb-4">
              {selectedNeighborhood?.category}
            </span>
            <p className="text-gray-400 leading-relaxed max-w-3xl">
              {selectedNeighborhood?.description}
            </p>
          </div>

          {/* Price Data Visualization */}
          {selectedNeighborhood?.active && neighborhoodPriceData[selectedNeighborhood.id] ? (() => {
            const priceData = neighborhoodPriceData[selectedNeighborhood.id];
            const metrics = getPriceMetrics(priceData);
            return (
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="text-gray-400 text-sm">Latest Price ({metrics.latest.quarter})</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">AED {metrics.latest.price.toLocaleString()}</div>
                  {metrics.yoyPercent && <div className="text-sm text-brand-accent">+{metrics.yoyPercent}% YoY</div>}
                </div>
                
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="text-gray-400 text-sm">5-Year Growth</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">+{metrics.growthPercent}%</div>
                  <div className="text-sm text-gray-400">Since {metrics.first.quarter}</div>
                </div>
                
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="text-gray-400 text-sm">Peak Price</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">AED {metrics.peak.price.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">{metrics.peak.quarter}</div>
                </div>
              </div>

              {/* Price Chart */}
              <div className="bg-[#111] border border-white/5 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Quarterly Price Trends (AED per sqft)</h3>
                <div className="relative h-80">
                  <svg className="w-full h-full" viewBox="0 0 1000 320" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={i * 80}
                        x2="1000"
                        y2={i * 80}
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                      />
                    ))}
                    
                    {/* Price line */}
                    <polyline
                      points={priceData.map((d, i) => {
                        const x = (i / (priceData.length - 1)) * 1000;
                        const y = 320 - ((d.price - metrics.chartMin) / (metrics.chartMax - metrics.chartMin)) * 320;
                        return `${x},${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#1DB976"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Gradient fill */}
                    <defs>
                      <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1DB976" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#1DB976" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points={[
                        '0,320',
                        ...priceData.map((d, i) => {
                          const x = (i / (priceData.length - 1)) * 1000;
                          const y = 320 - ((d.price - metrics.chartMin) / (metrics.chartMax - metrics.chartMin)) * 320;
                          return `${x},${y}`;
                        }),
                        '1000,320'
                      ].join(' ')}
                      fill="url(#priceGradient)"
                    />
                  </svg>
                  
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 -ml-12">
                    <span>{(metrics.chartMax / 1000).toFixed(1)}K</span>
                    <span>{((metrics.chartMax * 0.75 + metrics.chartMin * 0.25) / 1000).toFixed(1)}K</span>
                    <span>{((metrics.chartMax + metrics.chartMin) / 2000).toFixed(1)}K</span>
                    <span>{((metrics.chartMax * 0.25 + metrics.chartMin * 0.75) / 1000).toFixed(1)}K</span>
                    <span>{(metrics.chartMin / 1000).toFixed(1)}K</span>
                  </div>
                </div>
                
                {/* X-axis labels */}
                <div className="flex justify-between mt-4 text-xs text-gray-500">
                  <span>{priceData[0].quarter}</span>
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                  <span>2024</span>
                  <span>{priceData[priceData.length - 1].quarter}</span>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-[#111] border border-white/5 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Historical Data</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Quarter</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Price (AED/sqft)</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">QoQ Change</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">YoY Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceData.slice().reverse().map((data, i, arr) => {
                        const prevQuarter = arr[i + 1];
                        const yearAgo = priceData.find((_, idx) => idx === priceData.length - 1 - i - 4);
                        const qoqChange = prevQuarter ? ((data.price - prevQuarter.price) / prevQuarter.price * 100).toFixed(1) : null;
                        const yoyChange = yearAgo ? ((data.price - yearAgo.price) / yearAgo.price * 100).toFixed(1) : null;
                        
                        return (
                          <tr key={data.quarter} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-3 px-4 text-white font-medium">{data.quarter}</td>
                            <td className="py-3 px-4 text-right text-white">{data.price.toLocaleString()}</td>
                            <td className={`py-3 px-4 text-right font-medium ${
                              qoqChange && parseFloat(qoqChange) > 0 ? 'text-brand-accent' : 
                              qoqChange && parseFloat(qoqChange) < 0 ? 'text-red-400' : 'text-gray-400'
                            }`}>
                              {qoqChange ? `${parseFloat(qoqChange) > 0 ? '+' : ''}${qoqChange}%` : '-'}
                            </td>
                            <td className={`py-3 px-4 text-right font-medium ${
                              yoyChange && parseFloat(yoyChange) > 0 ? 'text-brand-accent' : 
                              yoyChange && parseFloat(yoyChange) < 0 ? 'text-red-400' : 'text-gray-400'
                            }`}>
                              {yoyChange ? `${parseFloat(yoyChange) > 0 ? '+' : ''}${yoyChange}%` : '-'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
          })() : (
            <div className="bg-[#111] border border-white/5 rounded-3xl p-12 text-center">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Price Data Coming Soon</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We're compiling comprehensive price data for {selectedNeighborhood?.name}. Check back soon for detailed villa prices, historical trends, and market insights.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src={Logo} alt="InvestDubai" className="h-5 brightness-0 invert" />
              <span className="text-sm text-gray-500">
                © 2026 InvestDubai. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms</a>
              <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy</a>
              <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Legal</a>
              <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default PriceDatabase;
