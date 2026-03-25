import { useState } from 'react';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { Search, TrendingUp } from 'lucide-react';
import { GlobalNavbar } from '../../components/GlobalNavbar';
import { GlobalFooter } from '../../components/GlobalFooter';

const neighborhoodCategories = [
  {
    category: 'Ultra-Luxury Villas',
    description: 'Exclusive villa communities with premium amenities',
    neighborhoods: [
      { id: 'palm-jumeirah', name: 'Palm Jumeirah', active: true, description: 'Iconic man-made island with beachfront villas' },
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
      { id: 'victory-heights', name: 'Victory Heights', active: true, description: 'Sports-themed community' },
      { id: 'jumeirah-village-triangle', name: 'Jumeirah Village Triangle', active: true, description: 'Affordable villa community' },
      { id: 'jumeirah-park', name: 'Jumeirah Park', active: true, description: 'Green community with parks' },
          ]
  },
  {
    category: 'Emerging Areas',
    description: 'High-growth neighborhoods with strong appreciation potential',
    neighborhoods: [
      { id: 'damac-hills', name: 'DAMAC Hills', active: true, description: 'Golf community with Trump International' },
      { id: 'dubai-south', name: 'Dubai South', active: true, description: 'Near Expo 2020 and Al Maktoum Airport' },
      { id: 'tilal-al-ghaf', name: 'Tilal Al Ghaf', active: true, description: 'Lagoon community by Majid Al Futtaim' },
      { id: 'town-square', name: 'Town Square', active: true, description: 'Affordable family community' },
    ]
  }
];

// Flatten for search and selection
const neighborhoods = neighborhoodCategories.flatMap(cat => 
  cat.neighborhoods.map(n => ({ ...n, category: cat.category }))
);

// Victory Heights market data (TRANSFERRED SALES - AED per sqft)
const victoryHeightsData = [
  { quarter: 'Q3-2020', price: 692 },
  { quarter: 'Q4-2020', price: 667 },
  { quarter: 'Q1-2021', price: 700 },
  { quarter: 'Q2-2021', price: 797 },
  { quarter: 'Q3-2021', price: 836 },
  { quarter: 'Q4-2021', price: 912 },
  { quarter: 'Q1-2022', price: 960 },
  { quarter: 'Q2-2022', price: 1002 },
  { quarter: 'Q3-2022', price: 1004 },
  { quarter: 'Q4-2022', price: 1080 },
  { quarter: 'Q1-2023', price: 1056 },
  { quarter: 'Q2-2023', price: 1150 },
  { quarter: 'Q3-2023', price: 1232 },
  { quarter: 'Q4-2023', price: 1260 },
  { quarter: 'Q1-2024', price: 1260 },
  { quarter: 'Q2-2024', price: 1421 },
  { quarter: 'Q3-2024', price: 1374 },
  { quarter: 'Q4-2024', price: 1497 },
  { quarter: 'Q1-2025', price: 1732 },
  { quarter: 'Q2-2025', price: 1838 },
  { quarter: 'Q3-2025', price: 1877 },
  { quarter: 'Q4-2025', price: 2037 },
];

// Tilal Al Ghaf market data (TRANSFERRED SALES - AED per sqft)
const tilalAlGhafData = [
  { quarter: 'Q1-2021', price: 850 },
  { quarter: 'Q2-2021', price: 932 },
  { quarter: 'Q3-2021', price: 804 },
  { quarter: 'Q4-2021', price: 938 },
  { quarter: 'Q1-2022', price: 1095 },
  { quarter: 'Q2-2022', price: 1100 },
  { quarter: 'Q3-2022', price: 1159 },
  { quarter: 'Q4-2022', price: 1193 },
  { quarter: 'Q1-2023', price: 1167 },
  { quarter: 'Q2-2023', price: 1232 },
  { quarter: 'Q3-2023', price: 1379 },
  { quarter: 'Q4-2023', price: 1343 },
  { quarter: 'Q1-2024', price: 1455 },
  { quarter: 'Q2-2024', price: 1540 },
  { quarter: 'Q3-2024', price: 1667 },
  { quarter: 'Q4-2024', price: 1765 },
  { quarter: 'Q1-2025', price: 1884 },
  { quarter: 'Q2-2025', price: 1948 },
  { quarter: 'Q3-2025', price: 2004 },
  { quarter: 'Q4-2025', price: 1966 },
];

// Town Square market data (TRANSFERRED SALES - AED per sqft)
const townSquareData = [
  { quarter: 'Q3-2020', price: 839 },
  { quarter: 'Q4-2020', price: 886 },
  { quarter: 'Q1-2021', price: 897 },
  { quarter: 'Q2-2021', price: 860 },
  { quarter: 'Q3-2021', price: 852 },
  { quarter: 'Q4-2021', price: 801 },
  { quarter: 'Q1-2022', price: 771 },
  { quarter: 'Q2-2022', price: 795 },
  { quarter: 'Q3-2022', price: 827 },
  { quarter: 'Q4-2022', price: 839 },
  { quarter: 'Q1-2023', price: 1075 },
  { quarter: 'Q2-2023', price: 972 },
  { quarter: 'Q3-2023', price: 1021 },
  { quarter: 'Q4-2023', price: 1063 },
  { quarter: 'Q1-2024', price: 1117 },
  { quarter: 'Q2-2024', price: 1134 },
  { quarter: 'Q3-2024', price: 1156 },
  { quarter: 'Q4-2024', price: 1219 },
  { quarter: 'Q1-2025', price: 1315 },
  { quarter: 'Q2-2025', price: 1362 },
  { quarter: 'Q3-2025', price: 1416 },
  { quarter: 'Q4-2025', price: 1362 },
];

// Jumeirah Village Triangle market data (TRANSFERRED SALES - AED per sqft)
const jumeirahVillageTriangleData = [
  { quarter: 'Q3-2020', price: 781 },
  { quarter: 'Q4-2020', price: 669 },
  { quarter: 'Q1-2021', price: 701 },
  { quarter: 'Q2-2021', price: 794 },
  { quarter: 'Q3-2021', price: 822 },
  { quarter: 'Q4-2021', price: 800 },
  { quarter: 'Q1-2022', price: 898 },
  { quarter: 'Q2-2022', price: 947 },
  { quarter: 'Q3-2022', price: 933 },
  { quarter: 'Q4-2022', price: 992 },
  { quarter: 'Q1-2023', price: 1049 },
  { quarter: 'Q2-2023', price: 998 },
  { quarter: 'Q3-2023', price: 1535 },
  { quarter: 'Q4-2023', price: 1350 },
  { quarter: 'Q1-2024', price: 1316 },
  { quarter: 'Q2-2024', price: 1301 },
  { quarter: 'Q3-2024', price: 1390 },
  { quarter: 'Q4-2024', price: 1437 },
  { quarter: 'Q1-2025', price: 1440 },
  { quarter: 'Q2-2025', price: 1429 },
  { quarter: 'Q3-2025', price: 1522 },
  { quarter: 'Q4-2025', price: 1707 },
];

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
  'victory-heights': victoryHeightsData,
  'tilal-al-ghaf': tilalAlGhafData,
  'town-square': townSquareData,
  'jumeirah-village-triangle': jumeirahVillageTriangleData,
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
  useDocumentHead({
    title: 'Dubai Villa Price Database | Quarterly Trends by Neighborhood | InvestDubai',
    description: 'The most comprehensive database of Dubai villa prices by neighborhood. Quarterly trends, 5-year growth, and peak prices for Palm Jumeirah, Jumeirah Islands, Al Barari, and more.',
    canonical: 'https://www.investdubai.com/price-database',
  });
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
      <GlobalNavbar dark />

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

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-display-1 text-white mb-6">
            Price Database
          </h1>
          <p className="text-body-lg text-gray-400 max-w-2xl mx-auto mb-12">
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

      {/* Category & Neighborhood Selection */}
      <section className="py-10 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          {/* Category Tabs */}
          <div className="mb-10 flex flex-col items-center">
            <p className="text-label text-zinc-500 mb-4">Category</p>
            <div className="inline-flex items-center bg-zinc-900 border border-zinc-800 rounded-xl p-1.5 flex-wrap gap-1">
              <button
                onClick={() => {
                  setActiveCategory(null);
                }}
                className={`px-5 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150 ${
                  !activeCategory
                    ? 'bg-zinc-100 text-zinc-900 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                }`}
              >
                All Areas
              </button>
              {neighborhoodCategories.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => {
                    setActiveCategory(cat.category);
                    const firstNeighborhood = cat.neighborhoods[0];
                    if (firstNeighborhood) {
                      setActiveNeighborhood(firstNeighborhood.id);
                    }
                  }}
                  className={`px-5 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150 ${
                    activeCategory === cat.category
                      ? 'bg-zinc-100 text-zinc-900 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Neighborhood Grid */}
          <div>
            <p className="text-label text-zinc-500 mb-4 text-center">Neighborhood</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
            {filteredNeighborhoods.map((neighborhood) => (
              <button
                key={neighborhood.id}
                onClick={() => setActiveNeighborhood(neighborhood.id)}
                className={`px-4 py-2 rounded-lg text-[13px] transition-all duration-150 border ${
                  activeNeighborhood === neighborhood.id
                    ? 'bg-amber-500/10 text-amber-200 border-amber-500/30 font-medium'
                    : 'bg-transparent border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-600 hover:bg-zinc-800'
                }`}
              >
                {neighborhood.name}
              </button>
            ))}
          </div>
          
            {filteredNeighborhoods.length === 0 && (
              <div className="text-center py-8">
                <p className="text-zinc-500">No neighborhoods found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Selected Neighborhood Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-h2 text-zinc-100 mb-3">
              {selectedNeighborhood?.name}
            </h2>
            <span className="inline-block px-3 py-1 bg-zinc-800 text-zinc-400 text-body rounded-md border border-zinc-700 mb-3">
              {selectedNeighborhood?.category}
            </span>
            <p className="text-zinc-500 leading-relaxed max-w-2xl">
              {selectedNeighborhood?.description}
            </p>
          </div>

          {/* Price Data Visualization */}
          {selectedNeighborhood?.active && neighborhoodPriceData[selectedNeighborhood.id] ? (() => {
            const priceData = neighborhoodPriceData[selectedNeighborhood.id];
            const metrics = getPriceMetrics(priceData);
            return (
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-zinc-500 text-body">Latest Price ({metrics.latest.quarter})</span>
                  </div>
                  <div className="text-stat text-zinc-100 mb-0.5">AED {metrics.latest.price.toLocaleString()}</div>
                  {metrics.yoyPercent && <div className="text-body text-emerald-400">+{metrics.yoyPercent}% YoY</div>}
                </div>
                
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-zinc-500 text-body">5-Year Growth</span>
                  </div>
                  <div className="text-stat text-zinc-100 mb-0.5">+{metrics.growthPercent}%</div>
                  <div className="text-body text-zinc-500">Since {metrics.first.quarter}</div>
                </div>
                
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-zinc-500 text-body">Peak Price</span>
                  </div>
                  <div className="text-stat text-zinc-100 mb-0.5">AED {metrics.peak.price.toLocaleString()}</div>
                  <div className="text-body text-zinc-500">{metrics.peak.quarter}</div>
                </div>
              </div>

              {/* Price Chart */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6">
                <h3 className="text-body text-zinc-100 mb-4 md:mb-6">Quarterly Price Trends (AED per sqft)</h3>
                <div className="relative h-64 md:h-80 group ml-12 md:ml-14">
                  <svg className="w-full h-full" viewBox="0 0 1000 320" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={i * 80}
                        x2="1000"
                        y2={i * 80}
                        stroke="rgb(39,39,42)"
                        strokeWidth="1"
                      />
                    ))}
                    
                    {/* Gradient fill */}
                    <defs>
                      <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
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
                    
                    {/* Price line */}
                    <polyline
                      points={priceData.map((d, i) => {
                        const x = (i / (priceData.length - 1)) * 1000;
                        const y = 320 - ((d.price - metrics.chartMin) / (metrics.chartMax - metrics.chartMin)) * 320;
                        return `${x},${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  
                  {/* Interactive hover columns */}
                  <div className="absolute inset-0 flex">
                    {priceData.map((d, i) => {
                      const xPercent = (i / (priceData.length - 1)) * 100;
                      const yPercent = ((d.price - metrics.chartMin) / (metrics.chartMax - metrics.chartMin)) * 100;
                      return (
                        <div
                          key={i}
                          className="absolute h-full group/point cursor-pointer"
                          style={{ 
                            left: `${xPercent}%`, 
                            width: `${100 / priceData.length}%`,
                            transform: 'translateX(-50%)'
                          }}
                        >
                          <div 
                            className="absolute w-3 h-3 bg-amber-500 rounded-full opacity-0 group-hover/point:opacity-100 transition-opacity border-2 border-zinc-900 left-1/2 -translate-x-1/2"
                            style={{ bottom: `${yPercent}%`, transform: 'translateX(-50%) translateY(50%)' }}
                          />
                          <div 
                            className="absolute left-1/2 -translate-x-1/2 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg opacity-0 group-hover/point:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10"
                            style={{ bottom: `${yPercent}%`, marginBottom: '16px' }}
                          >
                            <div className="text-body text-zinc-400">{d.quarter}</div>
                            <div className="text-body text-white">AED {d.price.toLocaleString()}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] md:text-body text-zinc-300 -ml-12 md:-ml-14">
                    <span>{(metrics.chartMax / 1000).toFixed(1)}K</span>
                    <span>{((metrics.chartMax * 0.75 + metrics.chartMin * 0.25) / 1000).toFixed(1)}K</span>
                    <span>{((metrics.chartMax + metrics.chartMin) / 2000).toFixed(1)}K</span>
                    <span>{((metrics.chartMax * 0.25 + metrics.chartMin * 0.75) / 1000).toFixed(1)}K</span>
                    <span>{(metrics.chartMin / 1000).toFixed(1)}K</span>
                  </div>
                </div>
                
                {/* X-axis labels */}
                <div className="flex justify-between mt-4 text-[10px] md:text-body text-zinc-300 ml-12 md:ml-14">
                  <span>{priceData[0].quarter}</span>
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                  <span>2024</span>
                  <span>{priceData[priceData.length - 1].quarter}</span>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-body text-zinc-100 mb-6">Historical Data</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-center py-3 px-2 md:px-4 text-label text-zinc-500">Quarter</th>
                        <th className="text-center py-3 px-2 md:px-4 text-label text-zinc-500">Price (AED/sqft)</th>
                        <th className="text-center py-3 px-2 md:px-4 text-label text-zinc-500">QoQ Change</th>
                        <th className="text-center py-3 px-2 md:px-4 text-label text-zinc-500">YoY Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceData.slice().reverse().map((data, i, arr) => {
                        const prevQuarter = arr[i + 1];
                        const yearAgo = priceData.find((_, idx) => idx === priceData.length - 1 - i - 4);
                        const qoqChange = prevQuarter ? ((data.price - prevQuarter.price) / prevQuarter.price * 100).toFixed(1) : null;
                        const yoyChange = yearAgo ? ((data.price - yearAgo.price) / yearAgo.price * 100).toFixed(1) : null;
                        
                        return (
                          <tr key={data.quarter} className="border-b border-zinc-800/50 hover:bg-zinc-800/50 transition-colors">
                            <td className="py-3 px-2 md:px-4 text-center text-zinc-300 text-body">{data.quarter}</td>
                            <td className="py-3 px-2 md:px-4 text-center text-zinc-200 text-body tabular-nums">{data.price.toLocaleString()}</td>
                            <td className={`py-3 px-2 md:px-4 text-center text-body ${
                              qoqChange && parseFloat(qoqChange) > 0 ? 'text-emerald-400' : 
                              qoqChange && parseFloat(qoqChange) < 0 ? 'text-red-400' : 'text-zinc-600'
                            }`}>
                              {qoqChange ? `${parseFloat(qoqChange) > 0 ? '+' : ''}${qoqChange}%` : '-'}
                            </td>
                            <td className={`py-3 px-2 md:px-4 text-center text-body ${
                              yoyChange && parseFloat(yoyChange) > 0 ? 'text-emerald-400' : 
                              yoyChange && parseFloat(yoyChange) < 0 ? 'text-red-400' : 'text-zinc-600'
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
              <h3 className="text-h4 text-white mb-3">Price Data Coming Soon</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We're compiling comprehensive price data for {selectedNeighborhood?.name}. Check back soon for detailed villa prices, historical trends, and market insights.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <GlobalFooter />
    </div>
    </>
  );
};

export default PriceDatabase;
