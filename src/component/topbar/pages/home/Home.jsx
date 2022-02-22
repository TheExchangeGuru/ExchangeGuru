import React from 'react';
import Chart from '../../../charts/Chart';
import FeaturedInfo from '../../../featuredInfo/FeaturedInfo';
import "./home.css";
import { userData } from '../../../../DummyData';


export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Stock Name" grid dataKey="Stock Dummy Data"/>
      
      
    </div>
  );
}

